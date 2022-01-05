import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import { UserService } from 'App/Services/UserService';
import { container } from 'tsyringe';

export default class UsersController {
  constructor(
    private userService = container.resolve(UserService)
  ){};

  public async index({response}: HttpContextContract) {
    try {
      const users =  await this.userService.list();
      return response.json(users)
    } catch (error) {
      return response.status(error);
    }
  }

  public async show({ params , response}: HttpContextContract) {
    try {
      const { id } = params;
     return await User.query().preload('roles').where('id', id).firstOrFail()
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async store({request, response}: HttpContextContract) {
    try {
      const { name, username, email, password, is_personal, is_admin } = request.all();
      await this.userService.create({ name, username, email, password, is_personal, is_admin });
      return response.send("")
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const { id } = params;
      const { name, username, email, password, is_personal, is_admin } = request.all();
      await this.userService.update(id, { name, username, email, password, is_personal, is_admin } );
      return response.json("")
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async delete({response, params}: HttpContextContract) {
    try {
      const { id } = params;
      await this.userService.delete(id);
      return response.json("")
    } catch (error) {
      return response.status(error.status);
    }
  }
}
