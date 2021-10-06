import { injectable } from "tsyringe";
import { IUserRepository } from "./IUserRepository";
import User from "App/Models/User";

@injectable()
class UserRepository implements IUserRepository {
	async list(): Promise<User[]> {
		const users = await User.all();
		return users;
	}

  async findById(id : number): Promise<User | null> {
		const user = await User.find(id);
		return user;
	}

	create(User: User): Promise<void | User> {
		return this.save(User);
	}

  update(User: User): Promise<User> {
		return User.save();
	}

  delete(user: User): Promise<void> {
		return user.delete();
	}

	save(user: User): Promise<User> {
		return User.create(user);
	}
}

export { UserRepository };
