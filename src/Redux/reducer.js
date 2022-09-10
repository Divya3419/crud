import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./action.type";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_DATA_REQUEST: {
      return { ...state, isError: false, isLoading: true };
    }
    case POST_DATA_SUCCESS: {
      return { ...state, isError: false, isLoading: false, data: payload };
    }
    case POST_DATA_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    default:
      return state;
  }
};
