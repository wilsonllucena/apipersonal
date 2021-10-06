import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';
import { ITenantReposistory } from 'App/Repositories/Tenant/ITenantRepository';
import { container } from 'tsyringe';


container.registerSingleton<ITenantReposistory>(
  "TenantRepository",
  TenantRepository
)
