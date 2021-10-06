import { ITenantReposistory } from 'App/Repositories/Tenant/ITenantRepository';
import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';
import { container } from 'tsyringe';


container.registerSingleton<ITenantReposistory>(
  "TenantRepository",
  TenantRepository
)
