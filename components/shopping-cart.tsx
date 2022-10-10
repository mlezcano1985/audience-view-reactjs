import { Badge, IconButton } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ShoppingCartList from './shopping-cart-list'
import useShoppingCartStore from '../hooks/store/useShoppingCart'

const ShoppingCart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const total = useShoppingCartStore((state) => state.totalItems)

  const handleClick = () => (): void => {
    setOpen((prev: boolean) => !prev)
  }
  const toggleDrawer = (): void => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        aria-label="cart"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick()}
        color="inherit"
      >
        <Badge badgeContent={total} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <ShoppingCartList open={open} onClose={toggleDrawer} />
    </>
  )
}

export default ShoppingCart
