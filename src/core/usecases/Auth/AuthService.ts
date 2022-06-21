import { Auth } from "core/entities/Auth/Auth";
import { AuthRepository } from "core/entities/Auth/AuthRepository";
import { LoginDTO, RegisterDTO } from "core/entities/Auth/AuthTypes";

export interface AuthService {
  Login(data: LoginDTO): Promise<Auth>;
  Register(data: RegisterDTO): Promise<Auth>;
}

export class AuthServiceImpl implements AuthService {
  authRepo: AuthRepository;

  constructor(ar: AuthRepository) {
    this.authRepo = ar;
  }

  async Login(data: LoginDTO): Promise<Auth> {
    return this.authRepo.Login(data);
  }

  async Register(data: RegisterDTO): Promise<Auth> {
    return this.authRepo.Register(data);
  }
}
