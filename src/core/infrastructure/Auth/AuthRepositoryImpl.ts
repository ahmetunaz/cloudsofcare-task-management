import { AuthDTO, LoginDTO, RegisterDTO } from "core/entities/Auth/AuthTypes";
import { Auth } from "core/entities/Auth/Auth";
import { AuthRepository } from "core/entities/Auth/AuthRepository";

import services from "../Services";
import { serializeDTO } from "helpers/utils";

export class AuthRepositoryImpl implements AuthRepository {
  async Login(data: LoginDTO): Promise<Auth> {
    const serializedData = serializeDTO(LoginDTO, data);

    const auth: AuthDTO = await services.api.login(serializedData);
    return new Auth(
      auth.accessToken,
      auth.tokenType,
      auth.expire,
      auth.refreshToken,
      auth.scope,
      auth.user
    );
  }

  async Register(data: RegisterDTO): Promise<Auth> {
    const serializedData = serializeDTO(RegisterDTO, data);
    console.log("serializedData", serializedData);

    const auth: AuthDTO = await services.api.register(serializedData);
    return new Auth(
      auth.accessToken,
      auth.tokenType,
      auth.expire,
      auth.refreshToken,
      auth.scope,
      auth.user
    );
  }
}
