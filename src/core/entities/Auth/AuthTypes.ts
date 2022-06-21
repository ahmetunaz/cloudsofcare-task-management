import { User } from "../User/User";

export class AuthDTO {
  accessToken: string = "";
  tokenType: string = "";
  expire: string = "";
  refreshToken: string = "";
  scope: string = "";
  user: User = new User(0, "", "", "");
}

export class LoginDTO {
  email: string = "";
  password: string = "";
}

export class RegisterDTO {
  name: string = "";
  email: string = "";
  password: string = "";
  passwordConfirm: string = "";
}
