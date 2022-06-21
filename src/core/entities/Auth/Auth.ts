import { User } from "../User/User";

export class Auth {
  accessToken: string;
  tokenType: string;
  expire: string;
  refreshToken: string;
  scope: string;
  user: User;

  constructor(
    accessToken: string,
    tokenType: string,
    expire: string,
    refreshToken: string,
    scope: string,
    user: User
  ) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.expire = expire;
    this.refreshToken = refreshToken;
    this.scope = scope;
    this.user = user;
  }
}
