import { injectable } from "tsyringe";
import Tenant from "App/Models/Tenant";
import { ITenantReposistory, TenantDTO } from "./ITenantRepository";

@injectable()
class TenantRepository implements ITenantReposistory {
	async list(): Promise<Tenant[]> {
		const tenants = await Tenant.all();
		return tenants;
	}

  async findById(id : number): Promise<Tenant | null> {
		const tenant = await Tenant.find(id);
		return tenant;
	}

	create(tenant: Tenant): Promise<void | Tenant> {
		return this.save(tenant);
	}

  update(tenant: Tenant): Promise<Tenant> {
		return tenant.save();
	}

  delete(tenant: Tenant): Promise<void> {
		return tenant.delete();
	}

	save(tenant: Tenant): Promise<Tenant> {
		return Tenant.create(tenant);
	}
}

export { TenantRepository };
