
interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    email: string;
  },
  token: string
}

@injectable()
class AuthenticateService {
  async execute({ username , password}: IRequest): Promise<IResponse> {

  }
}

export { AuthenticateService }
