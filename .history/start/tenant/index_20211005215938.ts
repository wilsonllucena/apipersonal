import Route from '@ioc:Adonis/Core/Route'

Route.get('/tenants', 'TenantController.index')
Route.post('/tenants', 'TenantController.create')
Route.put('/tenant/:id', 'TenantController.update')
Route.delete('/tenant/:id', 'TenantController.delete')


