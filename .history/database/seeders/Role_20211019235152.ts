import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
import { ROLES } from 'App/constants/roles'

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    // Esta função fetchOrCreateMany executa com base nas constantes ROLES somente os ROLES que não foram inseridos
    await Role.fetchOrCreateMany('slug', Object.values(ROLES))
  }
}
