import Tenant from "App/Models/Tenant";

interface TenantDTO {
  name: string;
}
interface ITenantReposistory {
  list(): Promise<Tenant[]>
  create(data: TenantDTO): Promise<Tenant | void>;
  save(tenant: Tenant): Promise<Tenant>;
}

export { ITenantReposistory, TenantDTO }
