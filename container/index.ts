import { ITenantRepository } from 'App/Repositories/Tenant/ITenantRepository';
import { TenantRepository } from 'App/Repositories/Tenant/TenantRepository';
import { IUserRepository } from 'App/Repositories/User/IUserRepository';
import { UserRepository } from 'App/Repositories/User/UserRepository';
import { container } from 'tsyringe';


container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)

container.registerSingleton<ITenantRepository>(
  "TenantRepository",
  TenantRepository
)
