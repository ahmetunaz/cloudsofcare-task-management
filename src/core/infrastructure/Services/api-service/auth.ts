import { LoginDTO, RegisterDTO } from "core/entities/Auth/AuthTypes";
import { UserDTO } from "core/entities/User/UserTypes";
import { client } from "core/infrastructure/HttpClient";
import { generateAuthData } from "helpers/utils";

export const login = async (payload: LoginDTO): Promise<any> => {
  const response = await client.get(`users?email=${payload.email}`);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    const user = data.find((user: UserDTO) => user.email === payload.email);
    if (user && user.password === payload.password) {
      const authData = generateAuthData(user);

      return authData;
    }
    throw "E-mail or password error!";
  }

  throw "An error occurred! Please try again later.";
};

export const register = async (payload: RegisterDTO): Promise<any> => {
  const response = await client.post("users", {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    role: "MEMBER",
  });

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    const authData = generateAuthData(data);

    return authData;
  }

  throw "An error occurred! Please try again later.";
};
