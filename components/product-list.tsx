import { Grid } from '@mui/material'
import React from 'react'
import useProducts from '../hooks/api/useProducts'
import CircularLoading from './circular-loading'
import Product from './product'

const ProductList: React.FC = () => {
  const { data, loading } = useProducts()

  if (loading) return <CircularLoading />

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {data.items.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  )
}

export default ProductList
