import { faker } from '@faker-js/faker';
import { Product } from "./product.model"
import { CreateProductDto, FindProductDto, updateProductDto } from "./product.dto";

export const products: Product[] = [];

export const addProduct = (data:CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }

  }
  products.push(newProduct);
  return newProduct
}
//puedes acceder al tipo de una propiedad de una interfaz a travez de su indice
export const updateProduct = (id:Product["id"], changes: updateProductDto): Product => {
  const index = products.findIndex(product => product.id === id)
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  //codigo del motor de busqueda
  return products
}

export const removeProduct = (id:string) => {
  //code
}

