import { Product } from "./product.model"
// Omit y Pick Type
//crean un nuevo tipado a partir de uno preestablecido
// con omit especificamos que campos queremos sacar
// con pick por el contrario escogemos que campos queresmos incluir
// con esto evitamos crear una nueva interfaz para insertar codigo u alguna otra operacion
// y evitamos la redundancia de codigo
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string,
}

// export interface CreateProductDto extends Pick<Product, "description" | "image" | "color" | "price"> {
//   categoryId: string,
// }
//----------------------------------------------------------------------------------


// Partial y Required Type
// Partial cambia todas las propiedades a opcionales
export interface updateProductDto extends Partial<CreateProductDto> {}
// Required cambia todas las propiedades a requeridas
//export interface updateProductDto extends Required<CreateProductDto> {}

//------------------------------------------------------------------------------------
