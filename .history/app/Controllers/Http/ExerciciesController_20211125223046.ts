import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Exercicie from 'App/Models/Exercicie'

export default class ExerciciesController {
  public async index ({response}: HttpContextContract) {
    const exercicies =  await Exercicie.all();
    return response.json(exercicies);
  }

  public async store ({ request , response }: HttpContextContract) {
    try{
      const data = request.all();
      await Exercicie.create(data);
      return response.status(200);
    }catch(erro){
      return response.status(500).json({'message': erro.message})
    }
  }

  public async show ({params}: HttpContextContract) {
    const { id } = params;
    return await Exercicie.query().where('id', id).firstOrFail()
  }

  public async update ({params, request,  response}: HttpContextContract) {
    const { id } = params;
    const exercicie = await Exercicie.find(id);
    const data = request.all();
    Object.assign(exercicie, data);
    if(exercicie){
      await exercicie.save();
    }
    return response.status(201);
  }

  public async destroy ({params, response}: HttpContextContract) {
    try {
      const { id } = params;
      const exercicie = await Exercicie.query().where('id', id).firstOrFail();

      if(exercicie){
        await exercicie.delete();
      }
      return response.status(201);
    } catch (error) {
      return response.status(500).json({message: error.message})
    }

  }
}
