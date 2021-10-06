import Tenant from "App/Models/Tenant";

interface TenantDTO {
  name: string;
}
interface ITenanatReposistory {
  list(): Promise<Tenant[]>
  create(data: TenantDTO): Promise<Tenant | void>;
  save(tenant: Tenant): Promise<Tenant>;
}

export { ITenanatReposistory }
