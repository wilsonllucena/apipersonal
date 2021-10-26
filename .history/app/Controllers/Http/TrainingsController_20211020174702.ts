import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Training from 'App/Models/Training';

export default class TrainingsController {
  public async index ({response}: HttpContextContract) {
    const data = await Training.all();
    return response.json(data);
  }

  public async store ({ request, response }: HttpContextContract) {
    try{
      const data = request.body();

      await Training.create(data)

      return response.created();
    }catch(error){
      return response.status(error).json(error.message)
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
