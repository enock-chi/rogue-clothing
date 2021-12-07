import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import NextLink from 'next/link';
import Layout from '../../components/Layout';
import {
  Card,
  Grid,
  Link,
  ListItem,
  Typography,
  List,
  Button,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import Image from 'next/image';

export default function productScreen() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <ListItem>
            <Typography component="h1" variant="h1">
              {product.name}
            </Typography>{' '}
          </ListItem>
          <ListItem>
            Category:<Typography>{product.category}</Typography>{' '}
          </ListItem>
          <ListItem>
            Brand: <Typography>{product.brand}</Typography>{' '}
          </ListItem>
          <ListItem>
            Rating:{' '}
            <Typography>
              {product.rating} stars ({product.numReviews} reviews)
            </Typography>
          </ListItem>
          <ListItem>
            Description: <Typography>{product.description}</Typography>
          </ListItem>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>R{product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
