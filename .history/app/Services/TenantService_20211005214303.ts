import { Exception } from "@poppinss/utils"
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
    const tenant = new Tenant;
    tenant.name = data.name;
    return this.tenantRepository.create(tenant)
  }

  async update(id: number , name: string ): Promise<Tenant | null>{
    const tenant = await this.tenantRepository.findById(id);
    if(!tenant){
      throw new Exception('Tenant not found')
    }
    tenant.name = name;

    return this.tenantRepository.update(tenant)
  }
}

export { TenantService }
