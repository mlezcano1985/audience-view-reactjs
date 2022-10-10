import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import ProductList from '../components/product-list'

const ProductsPage: NextPage = () => {
  const title = 'Products'

  return (
    <Layout>
      <Box width={1} height={1} p={1}>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
      </Box>
      <ProductList />
    </Layout>
  )
}

export default ProductsPage
