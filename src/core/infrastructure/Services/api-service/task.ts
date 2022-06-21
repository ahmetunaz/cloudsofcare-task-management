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

export const getTasks = async (
  case_id: number,
  assigned_to: number,
  assigned_by: number,
  is_completed: boolean,
  created_at_gte: string,
  created_at_lte: string
): Promise<any> => {
  let filters = [];
  if (case_id) filters.push(`case_id=${case_id}`);
  if (assigned_to) filters.push(`assigned_to=${assigned_to}`);
  if (assigned_by) filters.push(`assigned_by=${assigned_by}`);
  if (is_completed !== null) filters.push(`is_completed=${is_completed}`);
  if (created_at_gte)
    filters.push(
      `created_at_gte=${moment(created_at_gte).format("YYYY-MM-DD")}`
    );
  if (created_at_lte)
    filters.push(
      `created_at_lte=${moment(created_at_lte).format(
        "YYYY-MM-DDT00:00:00.000[Z]"
      )}`
    );

  const response = await client.get(`tasks?${filters.join("&")}`);
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
  const response = await client.patch(`tasks/${payload.id}`, postData);

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
