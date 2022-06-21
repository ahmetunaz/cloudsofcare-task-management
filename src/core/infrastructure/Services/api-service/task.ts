import { UpdateTaskDTO } from "core/entities/Task/TaskTypes";
import moment from "moment";
import { client } from "../../HttpClient";

export const getTask = async (id: number): Promise<any> => {
  const response = await client.get(`tasks/${id}`);
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const getTasks = async (): Promise<any> => {
  const response = await client.get("tasks");
  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const createTask = async (payload: object): Promise<any> => {
  const postData = {
    ...payload,
    is_completed: false,
    completed_at: null,
    created_at: moment(),
  };
  const response = await client.post("tasks", postData);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const updateTask = async (payload: UpdateTaskDTO): Promise<any> => {
  const postData = {
    ...payload,
    completed_at: payload.is_completed ? moment() : null,
  };
  const response = await client.put(`tasks/${payload.id}`, postData);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};

export const deleteTask = async (id: number): Promise<any> => {
  const response = await client.delete(`tasks/${id}`);

  const { data, status } = response;

  if (status >= 200 && status <= 299) {
    return data;
  }

  throw "An error occurred! Please try again later.";
};
