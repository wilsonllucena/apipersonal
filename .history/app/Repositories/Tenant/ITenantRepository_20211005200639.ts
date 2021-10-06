import Tenant from "App/Models/Tenant";

interface TenantDTO {
  name: string;
}
interface ITenanatReposistory {
  list(): Promise<Tenant[] | void>
  create(data: TenantDTO): Promise<Tenant | void>;
  save(tenant: Tenant): Promise<Tenant>;
}

export { ITenanatReposistory, TenantDTO }
