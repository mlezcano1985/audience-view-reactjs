import OfferDto from './offer.dto'

type OfferListDto = {
  page: number
  pageSize: number
  total: number
  items: OfferDto[]
}

export default OfferListDto
