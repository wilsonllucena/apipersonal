import { Response } from '@adonisjs/http-server/build/standalone';
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
      return response.status(error.status).send()
    }

  }
}
