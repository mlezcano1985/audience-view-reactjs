import currency from 'currency.js'
import { ComponentProps } from '../global'

type PriceProps = ComponentProps & {
  value: number
}
const Price: React.FC<PriceProps> = ({ value }) => (
  <span>{currency(value).format()}</span>
)

export default Price
