import Tenant from "App/Models/Tenant";
import { injectable } from "tsyringe";
import { ITenantReposistory, TenantDTO } from "./ITenantRepository";

@injectable()
class TenantRepository implements ITenantReposistory {
	async list(): Promise<Tenant[]> {
		const tenants = await Tenant.all();
		return tenants;
	}
	create(data: TenantDTO): Promise<void | Tenant> {
		const tenant = new Tenant();
		tenant.name = data.name;
		return this.save(tenant);
	}
	save(tenant: Tenant): Promise<Tenant> {
		return Tenant.create(tenant);
	}
}

export { TenantRepository };
