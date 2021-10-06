import Tenant from "App/Models/Tenant";

interface TenantDTO {
  name: string;
}
interface ITenantReposistory {
  list(): Promise<Tenant[]>
  create(data: TenantDTO): Promise<Tenant | void>;
  update(tenant: Tenant): Promise<Tenant>;
  findById(id: number): Promise<Tenant | null>;
  delete(tenant: Tenant): Promise<void>;
  save(tenant: Tenant): Promise<Tenant>;
}

export { ITenantReposistory, TenantDTO }
