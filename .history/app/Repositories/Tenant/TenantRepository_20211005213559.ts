import { injectable } from "tsyringe";
import Tenant from "App/Models/Tenant";
import { ITenantReposistory, TenantDTO } from "./ITenantRepository";

@injectable()
class TenantRepository implements ITenantReposistory {
	async list(): Promise<Tenant[]> {
		const tenants = await Tenant.all();
		return tenants;
	}

  async findById({ id }: TenantDTO): Promise<Tenant | null> {
		const tenant = await Tenant.find(id);
		return tenant;
	}

	create(tenant: Tenant): Promise<void | Tenant> {
		return this.save(tenant);
	}

  update(tenant: Tenant): Promise<Tenant> {
		return tenant.save();
	}

	save(tenant: Tenant): Promise<Tenant> {
		return Tenant.create(tenant);
	}
}

export { TenantRepository };
