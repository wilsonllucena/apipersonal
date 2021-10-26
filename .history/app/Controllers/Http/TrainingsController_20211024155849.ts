import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leaner from 'App/Models/Leaner';
import Training from 'App/Models/Training';

export default class TrainingsController {
  public async index ({response}: HttpContextContract) {
    const data = await Training.all();
    return response.json(data);
  }

  public async store ({ request, response }: HttpContextContract) {
    try{
      const data = request.body();


      const leaner = await Leaner.findByOrFail('id', data.leaner_id);

      delete data.leaner_id;

      const training = await Training.create(data)

      await training.related('leaners').attach([leaner.id])

      return response.created();
    }catch(error){
      return response.status(error).json({message: error.message})
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
