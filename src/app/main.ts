import { addProduct, products } from './products/product.service';

addProduct({
  id: '1',
  title: 'zapatos',
  createdAt: new Date(),
  stock: 90,
  size: 'S',
  category: {
    id: 12,
    name: "Ropa"
  }
});

console.log(products);
