import { Box, Button, Divider, Drawer, Typography } from '@mui/material'
import { ComponentProps } from '../global'
import useShoppingCartStore from '../hooks/store/useShoppingCart'
import Price from './price'
import ShoppingCartListItem from './shopping-cart-list-item'

type ShoppingCartListProps = ComponentProps & {
  open: boolean
  onClose: (event: unknown) => void
}
const ShoppingCartList: React.FC<ShoppingCartListProps> = ({
  open,
  onClose,
}) => {
  const totalPrice = useShoppingCartStore((state) => state.totalPrice)
  const clear = useShoppingCartStore((state) => state.clear)
  const cartItems = useShoppingCartStore((state) => state.items)

  const clearCart = () => {
    clear()
    onClose(null)
  }

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        height={'85%'}
        sx={{
          overflowY: 'auto',
        }}
        width={1}
      >
        <Box
          p={4}
          sx={{
            width: 300,
            maxWidth: 300,
            height: 80,
          }}
        >
          <Typography variant="h6" component="div">
            Products Added
          </Typography>
        </Box>
        {cartItems.map((cartItem) => (
          <ShoppingCartListItem key={cartItem.item.id} cartItem={cartItem} />
        ))}
      </Box>
      <Box height={'15%'} width={1}>
        <Box mx={2} mb={1} display="flex">
          <Box flexGrow={1} color="text.primary">
            <strong>Subtotal:</strong>
          </Box>
          <Box color="text.primary">
            <strong>
              <Price value={totalPrice} />
            </strong>
          </Box>
        </Box>
        <Box mb={1} display="block">
          <Divider />
        </Box>

        <Box m={1} display="block">
          <Button
            size="small"
            color="primary"
            fullWidth
            disabled={cartItems.length < 1}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </Drawer>
  )
}

export default ShoppingCartList
