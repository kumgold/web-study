// @ts-ignore
import React from 'react';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  { id: 1, name: '멋진 티셔츠', price: 25000, image: 'https://source.unsplash.com/random?t-shirt' },
  { id: 2, name: '세련된 청바지', price: 50000, image: 'https://source.unsplash.com/random?jeans' },
  { id: 3, name: '편안한 운동화', price: 70000, image: 'https://source.unsplash.com/random?sneakers' },
  { id: 4, name: '예쁜 모자', price: 15000, image: 'https://source.unsplash.com/random?hat' },
  { id: 5, name: '따뜻한 코트', price: 120000, image: 'https://source.unsplash.com/random?coat' },
  { id: 6, name: '고급 시계', price: 200000, image: 'https://source.unsplash.com/random?watch' },
];

function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Shop
          </Typography>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

function ProductCard({ product }) {
  return (
      <Card>
        <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            가격: {product.price.toLocaleString()} 원
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            장바구니에 담기
          </Button>
        </CardActions>
      </Card>
  );
}

function App() {
  return (
      <div>
        <Header />

        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Grid>
            ))}
          </Grid>
        </Container>
      </div>
  );
}

export default App;