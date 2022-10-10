import axios from 'axios'
import OfferListDto from '../models/offer-list.dto'

const findAll = async (url: string): Promise<OfferListDto> => {
  const resp = await axios.get<OfferListDto>(url)
  return resp.data
}
// const findAll = async (url: string): Promise<OfferListDto> => {
//   const resp = await fetch(url)
//   const offers = await resp.json()
//   return offers as OfferListDto
// }

const offerService = {
  findAll,
}

export default offerService
