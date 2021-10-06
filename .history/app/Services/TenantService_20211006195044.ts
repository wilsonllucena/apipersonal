import { Exception } from "@poppinss/utils"
import Tenant from "App/Models/Tenant"
import { TenantDTO } from "App/Repositories/Tenant/ITenantRepository"
import { TenantRepository } from "App/Repositories/Tenant/TenantRepository"
import { AppError } from "shared/errors/AppError"
import { container, inject, injectable } from "tsyringe"

@injectable()
class TenantService {

  private tenantRepository = container.resolve(TenantRepository)

  async list(): Promise<Tenant[]>{
    return this.tenantRepository.list()
  }

  async create(data: TenantDTO): Promise<Tenant| void>{
    const tenant = new Tenant;

    Object.assign(tenant, data);

    return this.tenantRepository.create(tenant)
  }

  async update(id: number , name: string ): Promise<Tenant | null>{

    const tenant = await this.tenantRepository.findById(id);

    if(!tenant){
      throw new Exception('Tenant not found', 404)
    }
    //atualiza o objeto
    Object.assign(tenant, { name });

    return this.tenantRepository.update(tenant)
  }

  async delete(id: number ): Promise<void>{

    const tenant = await this.tenantRepository.findById(id);

    if(!tenant){
      throw new Exception('Tenant not found', 404)
    }

    return this.tenantRepository.delete(tenant)
  }
}

export { TenantService }
