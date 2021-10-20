import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { intersection } from 'lodash';

export default class Acl {
  public async handle ({ auth: { user }, response}: HttpContextContract, next: () => Promise<void>, middlewareParams) {

    if(!user) throw new Error('Auth is required');

    const userRoles = await user.related('roles').query();
    const userRolesSlugs = userRoles.map(({slug}) => slug)

    // Se não existir slug que esta sendo passado no parametro retorna error
    if(intersection(userRolesSlugs, middlewareParams).length === 0){
      return response.forbidden('Missing privilege for this route')
    }

    await next()
  }
}
