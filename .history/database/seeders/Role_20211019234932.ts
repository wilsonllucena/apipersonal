import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
import { ROLES } from 'App/constants/roles'

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await Role.fetchOrCreateMany('slug', Object.values(ROLES))
  }
}
