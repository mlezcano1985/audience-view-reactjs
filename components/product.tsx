import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { ComponentProps } from '../global'
import OfferDto from '../models/offer.dto'
import AddToCart from './add-to-cart'
import Price from './price'

type ProductProps = ComponentProps & {
  product: OfferDto
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <Grid item>
    <Card
      sx={{
        width: 250,
      }}
    >
      <CardContent>
        <Box
          width={1}
          pt={1}
          sx={{ justifyContent: 'center', display: 'flex' }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={200}
          />
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          <Price value={product.price} />
        </Typography>
        <Typography variant="body1" color="text.primary">
          {product.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <AddToCart item={product} />
      </CardActions>
    </Card>
  </Grid>
)

export default Product
