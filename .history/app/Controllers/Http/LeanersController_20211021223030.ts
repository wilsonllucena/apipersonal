import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leaner from 'App/Models/Leaner';

export default class LeanersController {
  public async index ({response}: HttpContextContract) {
    const data = await Leaner.all();
    return response.json(data);
  }
  public async store ({request, response}: HttpContextContract) {
    try{
      const data = request.all();
      await Leaner.create(data);
      return response.status(200);
    }catch(error){
      return response.status(500).json({message: error.message})
    }
  }

  public async show ({params}: HttpContextContract) {
    const { id } = params;
    return await Leaner.query().preload('trainings').where('id', id).firstOrFail()
  }
  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
