import { container } from 'tsyringe';
import { ITenanatReposistory } from 'App/Repositories/Tenant/ITenantRepository';
import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';

container.registerSingleton<ITenanatReposistory>(
  'TenantRepository',
  TenantRepository
)
