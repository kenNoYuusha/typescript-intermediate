//crea un conjunto de opciones predefinidas, y al
//momento de tipar con ellas, solo puedes elegir entre esas opciones.
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES
}

const luisUser: User = {
  username: "jluis",
  role: ROLES.ADMIN
}

export { ROLES, User}
