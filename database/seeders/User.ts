import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
	public async run() {
		await User.createMany([
			{
        name: "Administrador",
        username: "admin",
				email: "wilson@email.com",
				password: "123456",
			},
		]);
	}
}
