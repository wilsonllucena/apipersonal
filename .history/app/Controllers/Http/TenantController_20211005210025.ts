import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { TenantService } from "App/Services/TenantService";
import { container } from "tsyringe";

export default class TenantsController {
  constructor(
    private tenantService = container.resolve(TenantService)
  ){};

  public async index({response}: HttpContextContract) {
    try {
      const tenants =  this.tenantService.list();
      return response.json(tenants)
    } catch (error) {
      return response.status(error.status);
    }
  }


  public async create({request, response}: HttpContextContract) {
    try {
      const  {name } = request.all();

      const tenant =  this.tenantService.create({name});

      return response.json(tenant)

    } catch (error) {
      return response.status(error.status);
    }
  }
}
