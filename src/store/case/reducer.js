import { Case } from "core/entities/Case/Case";
import { deleteItemFromArrayById, updateArrayItem } from "helpers/utils";
import {
  GET_CASE,
  GET_CASE_SUCCESS,
  GET_CASE_FAIL,
  GET_CASES,
  GET_CASES_SUCCESS,
  GET_CASES_FAIL,
  CREATE_CASE,
  CREATE_CASE_SUCCESS,
  CREATE_CASE_FAIL,
  UPDATE_CASE,
  UPDATE_CASE_SUCCESS,
  UPDATE_CASE_FAIL,
  DELETE_CASE,
  DELETE_CASE_SUCCESS,
  DELETE_CASE_FAIL,
  RESET_STATE,
  RESET_STATUS,
} from "./actionTypes";

const INIT_STATE = {
  case: {},
  cases: [],
  loading: false,
  saving: false,
  success: false,
  deleted: null,
};

const CaseState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CASE:
      return {
        ...state,
        loading: true,
      };

    case GET_CASE_SUCCESS:
      return {
        ...state,
        case: action.payload,
        loading: false,
      };

    case GET_CASE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_CASES:
      return {
        ...state,
        loading: true,
      };

    case GET_CASES_SUCCESS:
      return {
        ...state,
        cases: action.payload,
        loading: false,
      };

    case GET_CASES_FAIL:
      return {
        ...state,
        loading: false,
      };

    case CREATE_CASE:
      return {
        ...state,
        saving: true,
        success: false,
      };

    case CREATE_CASE_SUCCESS:
      const createCases = [...state.cases, action.payload];
      return {
        ...state,
        case: action.payload,
        cases: createCases,
        saving: false,
        success: true,
      };

    case CREATE_CASE_FAIL:
      return {
        ...state,
        saving: false,
        success: false,
      };

    case UPDATE_CASE:
      return {
        ...state,
        saving: true,
        success: false,
      };

    case UPDATE_CASE_SUCCESS:
      const updateCases = updateArrayItem(state.cases, action.payload);
      return {
        ...state,
        case: action.payload,
        cases: updateCases,
        saving: false,
        success: true,
      };

    case UPDATE_CASE_FAIL:
      return {
        ...state,
        saving: false,
        success: false,
      };

    case DELETE_CASE:
      return {
        ...state,
        deleted: null,
        saving: true,
        success: false,
      };

    case DELETE_CASE_SUCCESS:
      const deleteCases = deleteItemFromArrayById(state.cases, action.payload);
      return {
        ...state,
        case: {},
        cases: deleteCases,
        deleted: action.payload,
        saving: false,
        success: true,
      };

    case DELETE_CASE_FAIL:
      return {
        ...state,

        deleted: null,
        saving: false,
        success: false,
      };

    case RESET_STATE:
      const newCase = new Case(0, "");
      return {
        ...state,
        case: { ...newCase },
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

export default CaseState;
