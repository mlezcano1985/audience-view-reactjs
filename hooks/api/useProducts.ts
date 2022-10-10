import useSWR from 'swr'
import OfferListDto from '../../models/offer-list.dto'
import offerService from '../../services/offer.service'

type ProductListState = {
  loading: boolean
  error?: Error
  data: OfferListDto
}

const createData = (d?: OfferListDto): OfferListDto => {
  return (
    d || {
      items: [],
      page: 0,
      pageSize: 0,
      total: 0,
    }
  )
}

const useProducts = (): ProductListState => {
  const { data, error } = useSWR('/api/products', (url) =>
    offerService.findAll(url)
  )

  return {
    data: createData(data),
    loading: !error && !data,
    error,
  }
}

export default useProducts
