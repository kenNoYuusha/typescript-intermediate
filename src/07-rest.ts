import { ROLES, User} from "./01-enum"

const currentUser: User = {
  username: "jluis",
  role: ROLES.CUSTOMER,
}
//la funcion toma los parametros sueltes y los encapsula en un array y los precesa
export const checkRole = (...roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}
//se envian los argumentos sueltos
const rta = checkRole(ROLES.ADMIN, ROLES.SELLER)
console.log('checkRole', rta);
