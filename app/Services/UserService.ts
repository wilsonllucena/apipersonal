import { Exception } from "@poppinss/utils";
import { inject, injectable } from "tsyringe";
import User from "App/Models/User";
import { IUserRepository, IUserDTO } from "App/Repositories/User/IUserRepository";

@injectable()
class UserService {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepository
	) {}

	async list(): Promise<User[]> {
		return this.userRepository.list();
	}

	async create(data: IUserDTO): Promise<User | void> {
		const user = new User();

		Object.assign(user, data);

		return this.userRepository.create(user);
	}

	async update(id: number, data: IUserDTO): Promise<User | null> {
		const user = await this.userRepository.findById(id);

		if (!user) {
			throw new Exception("User not found", 404);
		}
		//atualiza o objeto
		Object.assign(user, data);

		return this.userRepository.update(user);
	}

	async delete(id: number): Promise<void> {
		const user = await this.userRepository.findById(id);

		if (!user) {
			throw new Exception("User not found", 404);
		}

		return this.userRepository.delete(user);
	}
}

export { UserService };
