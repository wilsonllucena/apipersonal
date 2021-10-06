import { Exception } from "@poppinss/utils";
import Tenant from "App/Models/Tenant";
import {
	ITenantRepository,
	TenantDTO,
} from "App/Repositories/Tenant/ITenantRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class TenantService {
	constructor(
		@inject("TenantRepository")
		private tenantRepository: ITenantRepository
	) {}

	async list(): Promise<Tenant[]> {
		return this.tenantRepository.list();
	}

	async create(data: TenantDTO): Promise<Tenant | void> {
		const tenant = new Tenant();

		Object.assign(tenant, data);

		return this.tenantRepository.create(tenant);
	}

	async update(id: number, name: string): Promise<Tenant | null> {
		const tenant = await this.tenantRepository.findById(id);

		if (!tenant) {
			throw new Exception("Tenant not found", 404);
		}
		//atualiza o objeto
		Object.assign(tenant, { name });

		return this.tenantRepository.update(tenant);
	}

	async delete(id: number): Promise<void> {
		const tenant = await this.tenantRepository.findById(id);

		if (!tenant) {
			throw new Exception("Tenant not found", 404);
		}

		return this.tenantRepository.delete(tenant);
	}
}

export { TenantService };
