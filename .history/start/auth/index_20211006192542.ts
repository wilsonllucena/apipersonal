import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthenticateController.login')
Route.post('/logout', 'AuthenticateController.logout')
