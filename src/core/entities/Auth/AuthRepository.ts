import { Auth } from "./Auth";
import { LoginDTO, RegisterDTO } from "./AuthTypes";

export interface AuthRepository {
  Login(data: LoginDTO): Promise<Auth>;
  Register(data: RegisterDTO): Promise<Auth>;
}
