import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { ROLES } from "App/constants/roles";
import Role from "App/Models/Role";
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {

  public static developmentOnly = true;

	public async run() {

    for (let role of Object.values(ROLES)){
      const persistedRole = await Role.findByOrFail('slug', role.slug);

     const user =  await User.firstOrCreate(
        {
          name: `${role.name}`,
          username: `${role.slug}`,
          email: `${role.slug}@email.com`,
          password: "123456",
        },
      );

      await user.related('roles').attach([persistedRole.id])

    }

	}
}
