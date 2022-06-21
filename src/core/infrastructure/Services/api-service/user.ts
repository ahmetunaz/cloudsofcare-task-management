import { client } from "../../HttpClient";

export const getUser = async (id: number): Promise<any> => {
  const response = await client.get(`users/${id}`);
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const getUsers = async (): Promise<any> => {
  const response = await client.get("users");
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};
