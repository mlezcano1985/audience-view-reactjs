import type { NextApiRequest, NextApiResponse } from 'next'
import OfferListDto from '../../models/offer-list.dto'
import offerService from '../../services/offer.service'

const baseUrl = process.env.BASE_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OfferListDto>
) {
  const offer = await offerService.findAll(`${baseUrl}/offers`)
  res.status(200).json(offer)
}
