import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeedSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'wilson@email.com',
        password: '123456',
      }
    ])
  }
}