import logo from "@/public/images/content-image-01.jpg"
import { RowData } from '../interfaces'

export const rowDataExample: RowData = {
  repository: {
    top: {
      name: 'MIT J-WAFS',
      description:
        'Abdul Latif Jameel Water and Food Systems Lab (J-WAFS) ',
      mission: 'Securing humankind’s vital resources',
      year: '2014',
      partners: ['MIT'],
    },
    content: {
      research: {
        data: {
          research: ['Water & Food systems'],
        },
      },
      established: {
        data: {
          year: ['2014'],
        },
      },
      headquarters: {
        data: {
          headquarters: ['MIT, Cambridge USA'],
        },
      },
      leadership: {
        data: {
          leadership: ['John Liendhard', 'Renee Robins', 'Rohit Karnik'],
        },
      },
      'key initiatives': {
        data: {
          'key initiatives': ['FACT Alliance', 'Solutions Grants', 'Seed Grants', 'J-WAFS Fellowships'],
        },
      },
      'key partners': {
        data: {
          'key partners': ['MIT', 'Community Jameel'],
        },
      },
      fullDescription:
        'J-WAFS is an MIT-wide effort that fuels research, innovation, and cross-disciplinary collaborations focused on water and food systems to meet human needs. Through early-stage research grants, support for technology commercialisation, sponsored research management, student funding and mentorship, and events that convene local and global experts, J-WAFS leverages the world-class resources for which MIT is known.',
      socialMediaLinks: {
        instagram: {
          url: 'https://instagram.com/innovatex',
          name: 'innovatex',
        },
        youtube: {
          url: 'https://youtube.com/innovatex',
          name: 'InnovateX Official',
        },
        linkedin: {
          url: 'https://linkedin.com/company/innovatex',
          name: 'InnovateX',
        },
        facebook: {
          url: 'https://facebook.com/innovatex',
          name: 'InnovateX',
        },
        twitter: {
          url: 'https://twitter.com/innovatex',
          name: 'InnovateX',
        },
      },
      stats: [
        {
          title: '300+',
          content: 'funded research',
        },
        {
          title: '116',
          content: 'research projects',
        },
        {
          title: '27',
          content: 'fellowships',
        },
        {
          title: '$16.9M',
          content: 'follow-on funding',
        },
        {
          title: '8 ',
          content: 'spinouts',
        },
     
      ],
      listContent: [
        {
          title: 'Project SolarGlow',
          source: 'Internal',
          date: '2021-06-15',
        },
        {
          title: 'Water Purification Project',
          source: 'Internal',
          date: '2022-01-20',
        },
      ],
      features: [
        {
          image: {
            imageUrl: logo,
          },
          title: 'Advanced Robotics',
        },
      ],
    },
  },
}
export const rowJwafs: RowData = {
  repository: {
    top: {
      name: 'Abdul Latif Jameel Water and Food Systems Lab',
      description:
        'Fuelling research, innovation and collaboration to solve urgent global water and food systems challenges',
      mission: 'Securing humankind’s vital resources',
      year: '2014',
      partners: ['MIT'],
    },
    content: {
      headquarters: {
        data: {
          location: ['Cambridge, USA'],
        },
      },
      leadership: {
        data: {
          leadership: ['John Lienhard', 'Renee Robins', 'Rohit Karnik'],
        },
      },
      'key initiatives': {
        data: {
          'key initiatives': ['Research', 'Grants', 'Spinouts'],
        },
      },
      socialMediaLinks: {
        linkedin: { url: '', name: 'null' },
        instagram: { url: 'null', name: 'null' },
        facebook: { url: 'null', name: 'null' },
        youtube: { url: 'null', name: 'null' },
        twitter: { url: 'null', name: 'null' },
      },
      fullDescription:
        'Fuelling research, innovation and collaboration to solve urgent global water and food systems challenges',
      stats: [],
      listContent: [],
      features: [],
    },
  },
}
