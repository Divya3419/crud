import axios from "axios";
import {
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./action.type";

export const postData = (payload) => (dispatch) => {
  dispatch({ type: POST_DATA_REQUEST });
  return axios
    .post(`https://blueproduct.herokuapp.com/employee`, payload)
    .then((r) => {
      dispatch({ type: POST_DATA_SUCCESS, payload: r.data });
      return { type: POST_DATA_SUCCESS };
    })

    .catch((e) => {
      dispatch({ type: POST_DATA_FAILURE, payload: e });
      return { type: POST_DATA_FAILURE };
    });
};
