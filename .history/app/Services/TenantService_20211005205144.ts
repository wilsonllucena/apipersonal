import Tenant from "App/Models/Tenant"
import { ITenantReposistory, TenantDTO } from "App/Repositories/Tenant/ITenantRepository"
import { inject, injectable } from "tsyringe"

@injectable()
class TenantService {
  constructor(
    @inject('TenantRepository')
    private tenantRepository: ITenantReposistory
  ){}

  async list(): Promise<Tenant[]>{
    return this.tenantRepository.list()
  }

  async create(data: TenantDTO): Promise<Tenant| void>{
    return this.tenantRepository.create(data)
  }
}

export { TenantService }
