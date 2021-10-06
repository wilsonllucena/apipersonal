import Route from '@ioc:Adonis/Core/Route'
import AuthenticateController from 'App/Controllers/Http/AuthenticateController'

Route.post('/auth', 'Authenticate.login')
