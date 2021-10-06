import User from "App/Models/User";
import { IUserDTO } from "./IUserDTO";

interface IUserRepository {
  list(): Promise<User[]>
  create(data: IUserDTO): Promise<User | void>;
  update(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  delete(user: User): Promise<void>;
  save(user: User): Promise<User>;
}

export { IUserRepository, IUserDTO }
