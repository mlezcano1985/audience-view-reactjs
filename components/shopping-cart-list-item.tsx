import { ComponentProps } from '../global'
import Avatar from '@mui/material/Avatar'
import AddToCart from './add-to-cart'
import { Box, Divider, Typography } from '@mui/material'
import CartItem from '../models/cart-item'
import Price from './price'

type ShoppingCartListItemProps = ComponentProps & {
  cartItem: CartItem
}
const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({
  cartItem,
}) => {
  const { item, amount } = cartItem

  return (
    <Box
      width={1}
      sx={{
        width: 300,
        maxWidth: 300,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
        width={1}
      >
        <Box p={1}>
          <Avatar src={item.image} />
        </Box>
        <Box
          p={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">{item.title}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
        width={1}
      >
        <Box
          p={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Typography variant="subtitle2">
            <Price value={item.price} /> x {amount}
          </Typography>
        </Box>
        <Box p={1}>
          <AddToCart item={item} />
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}

export default ShoppingCartListItem
