import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from './products/product.service';

for (let index = 0; index < 5; index++) {
  addProduct({
    //id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    //createdAt: faker.date.recent(),
    //updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    categoryId: faker.datatype.uuid(),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // },
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: "New title",
  stock: 80,
})

// findProducts({
//   stock: 10,
//   color: 'red',
// })
