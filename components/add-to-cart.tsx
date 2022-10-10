import { Box, Button, IconButton } from '@mui/material'
import { ComponentProps } from '../global'
import useShoppingCartStore from '../hooks/store/useShoppingCart'
import OfferDto from '../models/offer.dto'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

type AddToCartProps = ComponentProps & {
  item: OfferDto
}
const AddToCart: React.FC<AddToCartProps> = ({ item }) => {
  const add = useShoppingCartStore((state) => state.add)

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    add(item)
  }

  return (
    <Box
      width={1}
      sx={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={addItem}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  )
}

export default AddToCart
