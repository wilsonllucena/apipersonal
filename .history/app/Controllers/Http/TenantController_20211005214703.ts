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

  public async update({request, response}: HttpContextContract) {
    try {
      const  {name} = request.all();
      // const  {name} = request.all();

      console.log(request.all());return;
      await this.tenantService.update(1, name);
      return response.send("")
    } catch (error) {
      return response.status(error.status);
    }
  }
}
