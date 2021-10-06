import Tenant from "App/Models/Tenant";
import { container, injectable } from "tsyringe";
import { ITenanatReposistory, TenantDTO } from "./ITenantRepository";

@injectable()
class TenantRepository implements ITenanatReposistory {

  async list(): Promise<Tenant[]> {
   const tenants =  await Tenant.all();
   return tenants;
  }
  create(data: TenantDTO): Promise<void | Tenant> {
    throw new Error("Method not implemented.");
  }
  save(tenant: Tenant): Promise<Tenant> {
    throw new Error("Method not implemented.");
  }

}

export {TenantRepository}
