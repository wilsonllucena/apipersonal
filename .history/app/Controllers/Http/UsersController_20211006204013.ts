import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
      return response.status(error.status);
    }
  }

  public async create({request, response}: HttpContextContract) {
    try {
      const data = request.body();
      await this.userService.create(data);
      return response.send("")
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const { id } = params;
      const  {name} = request.all();
      await this.userService.update(id, name);
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
