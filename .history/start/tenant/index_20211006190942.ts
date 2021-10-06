import Route from '@ioc:Adonis/Core/Route'

Route.get('/tenants', 'TenantController.index').middleware('auth')
Route.post('/tenants', 'TenantController.create').middleware('auth')
Route.put('/tenant/:id', 'TenantController.update')
Route.delete('/tenant/:id', 'TenantController.delete')


