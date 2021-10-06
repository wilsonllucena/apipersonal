interface IUserDTO {
  id?: number,
  name: string,
  username: string,
  email: string,
  password: string,
  avatar?: string,
  is_personal?: boolean,
  is_admin?: boolean
}
export { IUserDTO }
