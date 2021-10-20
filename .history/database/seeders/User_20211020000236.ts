import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { ROLES } from "App/constants/roles";
import Role from "App/Models/Role";
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
	public async run() {

    for (let role of Object.values(ROLES)){
      const persistRole = await Role.findByOrFail('slug', role.slug);

      await User.firstOrCreate(
        {
          name: `${role.name}`,
          username: `${role.slug}`,
          email: `${role.slug}@email.com`,
          password: "123456",
        },
      );

    }

	}
}
