import { Product } from "./product.model"
// Omit y Pick Type
//crean un nuevo tipado a partir de uno preestablecido
// con omit especificamos que campos queremos sacar
// con pick por el contrario escogemos que campos queresmos incluir
// con esto evitamos crear una nueva interfaz para insertar codigo u alguna otra operacion
// y evitamos la redundancia de codigo
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
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

//Podemos combinar utility types de la siguiente manera
//Readonly transforma todas nuestras propiedades a solo lectura.
export interface FindProductDto extends Readonly<Partial<Omit<Product, "tags">>>{
  readonly tags: ReadonlyArray<string>;
}

//Omit<Product, "tags">  --> omite la propiedad tags de Product
//Partial  --> establece el resto de parametros como opcionales
//Readonly --> establece las propiedades como solo lectura
//readonly tags: ReadonlyArray<string>  --> volvemos a definir la propiedad tags pero esta vez
//como solo lectura y readonlyArray esto nos permite no sobreescribir el valor y tampoco mutar el array.
