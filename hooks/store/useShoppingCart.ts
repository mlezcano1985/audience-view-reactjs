import create from 'zustand'
import CartItem from '../../models/cart-item'
import OfferDto from '../../models/offer.dto'

type CartItemListState = {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  add: (product: OfferDto) => void
  remove: (product: OfferDto) => void
  clear: () => void
}

const updateTotals = (items: CartItem[]): [number, number] => {
  const price = items.reduce((prev, current) => {
    return prev + current.amount * current.item.price
  }, 0)

  const total = items.reduce((prev, current) => {
    return prev + current.amount
  }, 0)

  return [total, price]
}

const useShoppingCartStore = create<CartItemListState>((set, get) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  add: (product: OfferDto) => {
    const state = get()
    const i = state.items.findIndex(({ item }) => item.id === product.id)
    if (i !== -1) {
      state.items[i].amount++
    } else {
      state.items.push({
        item: product,
        amount: 1,
      })
    }

    const [total, price] = updateTotals(state.items)
    set({ items: state.items, totalItems: total, totalPrice: price })
  },

  remove: (product: OfferDto) => {
    const state = get()
    const i = state.items.findIndex(({ item }) => item.id === product.id)
    if (i !== -1) {
      state.items.splice(i, 1)
      const [total, price] = updateTotals(state.items)
      set({ items: state.items, totalItems: total, totalPrice: price })
    }
  },

  clear: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
}))

export default useShoppingCartStore
