import { container } from 'tsyringe';
import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';
import { ITenantReposistory } from 'App/Repositories/Tenant/ITenantRepository';


container.registerSingleton<ITenantReposistory>(
  'TenantRepository',
  TenantRepository
)
