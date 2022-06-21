import { UpdateCaseDTO } from "core/entities/Case/CaseTypes";
import { client } from "../../HttpClient";

export const getCase = async (id: number): Promise<any> => {
  const response = await client.get(`cases/${id}`);
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const getCases = async (): Promise<any> => {
  const response = await client.get("cases");
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const createCase = async (payload: object): Promise<any> => {
  const response = await client.post("cases", payload);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const updateCase = async (payload: UpdateCaseDTO): Promise<any> => {
  const response = await client.put(`cases/${payload.id}`, payload);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const deleteCase = async (id: number): Promise<any> => {
  const response = await client.delete(`cases/${id}`);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};
