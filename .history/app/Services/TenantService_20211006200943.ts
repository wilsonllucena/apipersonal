import { Exception } from "@poppinss/utils";
import Tenant from "App/Models/Tenant";
import { TenantDTO } from "App/Repositories/Tenant/ITenantRepository";
import { TenantRepository } from "App/Repositories/Tenant/TenantRepository";
import { container, injectable } from "tsyringe";

@injectable()
class TenantService {
	private tenantRepository = container.resolve(TenantRepository);

  /**
   *
   * @returns
   */
	async list(): Promise<Tenant[]> {
		return this.tenantRepository.list();
	}

  /**
   *
   * @param data
   * @returns
   */
	async create(data: TenantDTO): Promise<Tenant | void> {
		const tenant = new Tenant();

		Object.assign(tenant, data);

		return this.tenantRepository.create(tenant);
	}

  /**
   *
   * @param id
   * @param name
   * @returns
   */
	async update(id: number, name: string): Promise<Tenant | null> {
		const tenant = await this.tenantRepository.findById(id);

		if (!tenant) {
			throw new Exception("Tenant not found", 404);
		}
		//atualiza o objeto
		Object.assign(tenant, { name });

		return this.tenantRepository.update(tenant);
	}

  /**
   *
   * @param id
   * @returns
   */
	async delete(id: number): Promise<void> {
		const tenant = await this.tenantRepository.findById(id);

		if (!tenant) {
			throw new Exception("Tenant not found", 404);
		}

		return this.tenantRepository.delete(tenant);
	}
}

export { TenantService };
