import { getData } from '@/functions/api/getData';
import legalMapper from '@/functions/transformers/legalMapper';
import { getIdByDisplayName } from '@/functions/utils/findCollectionId';
import React from 'react'



export default  async function page() {
    const getIdLegal =  getIdByDisplayName("Legals");
    const getDatalegal = await getData(getIdLegal);

    const cleanLegalData = getDatalegal.items.map((item) => legalMapper(item));
  return (
    <div className="mt-24">
      {JSON.stringify(cleanLegalData[3].body)}
    </div>
  )
}
