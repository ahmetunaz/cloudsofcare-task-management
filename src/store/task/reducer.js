import { Task } from "core/entities/Task/Task";
import { deleteItemFromArrayById, updateArrayItem } from "helpers/utils";
import {
  GET_TASK,
  GET_TASK_SUCCESS,
  GET_TASK_FAIL,
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAIL,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  RESET_STATE,
  RESET_STATUS,
} from "./actionTypes";

const INIT_STATE = {
  task: {},
  tasks: [],
  loading: false,
  saving: false,
  success: false,
  deleted: null,
};

const TaskState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        loading: true,
      };

    case GET_TASK_SUCCESS:
      return {
        ...state,
        task: action.payload,
        loading: false,
      };

    case GET_TASK_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_TASKS:
      return {
        ...state,
        loading: true,
      };

    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case GET_TASKS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case CREATE_TASK:
      return {
        ...state,
        saving: true,
        success: false,
      };

    case CREATE_TASK_SUCCESS:
      const createTasks = [...state.tasks, action.payload];
      return {
        ...state,
        task: action.payload,
        tasks: createTasks,
        saving: false,
        success: true,
      };

    case CREATE_TASK_FAIL:
      return {
        ...state,
        saving: false,
        success: false,
      };

    case UPDATE_TASK:
      return {
        ...state,
        saving: true,
        success: false,
      };

    case UPDATE_TASK_SUCCESS:
      const updateTasks = updateArrayItem(state.tasks, action.payload);
      return {
        ...state,
        task: action.payload,
        tasks: updateTasks,
        saving: false,
        success: true,
      };

    case UPDATE_TASK_FAIL:
      return {
        ...state,
        saving: false,
        success: false,
      };

    case DELETE_TASK:
      return {
        ...state,
        deleted: null,
        saving: true,
        success: false,
      };

    case DELETE_TASK_SUCCESS:
      const deleteTasks = deleteItemFromArrayById(state.tasks, action.payload);
      return {
        ...state,
        task: {},
        tasks: deleteTasks,
        deleted: action.payload,
        saving: false,
        success: true,
      };

    case DELETE_TASK_FAIL:
      return {
        ...state,

        deleted: null,
        saving: false,
        success: false,
      };

    case RESET_STATE:
      const newTask = new Task(0, "");
      return {
        ...state,
        task: { ...newTask },
      };

    case RESET_STATUS:
      return {
        ...state,
        deleted: null,
        saving: false,
        success: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default TaskState;
