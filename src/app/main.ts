import { addProduct, products } from './products/product.service';

addProduct({
  id: '1',
  title: 'zapatos',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  size: 'S',
  category: {
    id: "12",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Ropa"
  }
});

console.log(products);
