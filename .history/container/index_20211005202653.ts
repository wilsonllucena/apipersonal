import { container } from 'tsyringe';
import { ITenantReposistory } from 'App/Repositories/Tenant/ITenantRepository';
import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';

container.registerSingleton<ITenantReposistory>(
  'TenantRepository',
  TenantRepository
)
