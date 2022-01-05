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
  public async update ({params, request,  response}: HttpContextContract) {
    const { id } = params;
    // const leaner = await Leaner.query().where('id', id).firstOrFail();
    const data = request.all();
    // leaner.merge(data);
    await Leaner.updateOrCreate(id, data);
    return response.status(201);

  }

  public async destroy ({params, response}: HttpContextContract) {
    try {
      const { id } = params;
      const leaner = await Leaner.query().preload('trainings').where('id', id).firstOrFail();

      if(leaner){
        leaner.delete();
      }
      return response.status(201);
    } catch (error) {
      return response.status(500).json({message: error.message})
    }

  }
}
