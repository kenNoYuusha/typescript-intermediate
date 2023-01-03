type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size: Sizes;
// }
// la diferencia principal entre interface y type es que las interfaces se pueden extender
// por lo general las interfaces son utilizadas para estructuras mas complejas
// type es usada para estructuras mas simples.
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'zapatos',
  createdAt: new Date(),
  stock: 90,
  size: "S"
})
