import Image from 'next/image'
type Item = {
  _id: string
  name: string
  // Add more properties based on your actual data structure
}

// Define the type for the API response
type ApiResponse = {
  items: Item[]
  count: number
  limit: number
  offset: number
}
const getData = async () => {
  const startTime = Date.now()
  const baseUrl =
    'https://api.webflow.com/v2/collections/61ee828a15a3185c99bde543/items'
  const apiKey =
    'ecccc828f26a06e354a027b74ac0ed7d37c706475c74650f83fba8fa289897ee'
  let allItems: any = []
  let offset = 0
  let fetchMore = true

  try {
    while (fetchMore) {
      const response = await fetch(`${baseUrl}?offset=${offset}&limit=100`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch, status: ${response.status}`)
      }

      const { items } = await response.json()
      allItems = allItems.concat(items)
      offset += items.length

      // Check if the number of items fetched is less than 100, indicating last page
      fetchMore = items.length === 100
    }
    const endTime = Date.now() // Capture end time
    const fetchDuration = (endTime - startTime) / 1000 // Calculate duration in seconds

    console.log('Total items fetched: ', allItems.length)
    console.log('Fetching time: ', fetchDuration, 'seconds')

    return { props: { items: allItems, fetchTime: fetchDuration } }
  } catch (error) {
    console.error('Error fetching data: ', error)
    return { props: { items: [], error: 'eror', fetchTime: 0 } }
  }
}


export default async function FiltredNews({programme}: {programme: string     }) {
  const data = await getData()
  const filtredData = data.props.items.filter(
    (item: any) =>
      item.fieldData.programme === programme
  )
  const newsNumber = data.props.items.length
  const duration = data.props.fetchTime
  const item = JSON.stringify(data.props.items[0].fieldData.programme)
  const jWafsSolutions = '6344068d8410be179f246867'
  const JPalMena = '627e379dd27c0445d4f75ac4'

  return (
    <main className=''>
      <h1>
      {programme}
      </h1>

      <ul>
        {filtredData.map((item: any) => {
          // Perform checks to ensure all necessary data is available
          const thumbnailUrl = item.fieldData?.thumbnail?.url
            ? item.fieldData.thumbnail.url
            : ''
          const itemName = item.fieldData?.name
          const porgrameName = item.fieldData?.programme
            ? item.fieldData?.programme
            : 'No programme'

          if (!thumbnailUrl || !itemName) {
            console.log(
              `Missing data for item ${item.id}: thumbnail URL or name is undefined.`,
            )
            return null
          }

          return (
            <div
              key={item.id}
              className="max-w-sm overflow-hidden rounded bg-white shadow-lg"
            >
              <Image
                src={thumbnailUrl}
                alt={item.fieldData.thumbnail.alt || 'Image'}
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="px-6 py-4">
                <h2 className=" mx-24">{itemName}</h2>
              </div>
            </div>
          )
        })}
      </ul>
    </main>
  )
}
