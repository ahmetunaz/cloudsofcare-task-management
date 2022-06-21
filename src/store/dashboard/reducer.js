import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_DATA_FAIL,
  GET_DASHBOARD_DATA_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  data: {},
  loading: false,
};

const DashboardState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
      };

    case GET_DASHBOARD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case GET_DASHBOARD_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default DashboardState;
