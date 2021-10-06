import Tenant from "App/Models/Tenant"
import { ITenantReposistory, TenantDTO } from "App/Repositories/Tenant/ITenantRepository"
import { TenantRepository } from "App/Repositories/Tenant/TenantRepository"
import { container, inject, injectable } from "tsyringe"

@injectable()
class TenantService {

  private tenantRepository = container.resolve(TenantRepository)


  async list(): Promise<Tenant[]>{
    return this.tenantRepository.list()
  }

  async create(data: TenantDTO): Promise<Tenant| void>{
    return this.tenantRepository.create(data)
  }
}

export { TenantService }
