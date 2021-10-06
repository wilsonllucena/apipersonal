import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TenantService } from "App/Services/TenantService";
import { container } from "tsyringe";

export default class TenantsController {
  constructor(
    private tenantService = container.resolve(TenantService)
  ){};

  public async index({response}: HttpContextContract) {
    try {
      const tenants =  await this.tenantService.list();
      return response.json(tenants)
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async create({request, response}: HttpContextContract) {
    try {
      const  {name} = request.all();
      await this.tenantService.create({name});
      return response.send("")
    } catch (error) {
      return response.status(error.status);
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    try {
      const  {name} = request.all();
      const { id } = params;

      await this.tenantService.update(id, name);
      return response.json({"message": "Atualizado com sucesso"})
    } catch (error) {
      return response.status(error.status);
    }
  }
}
