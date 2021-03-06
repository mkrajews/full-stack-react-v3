import axios from "axios";

import * as msg from "../messages";
import api from "../../api";

export function fetchTodos() {
  return function(dispatch) {
    dispatch({ type: msg.FETCH_TODOS_REQUEST });
    return axios
      .get(api.get.todos())
      .then(response => {
        dispatch({ type: msg.FETCH_TODOS_SUCCESS, payload: response });
        return response;
      })
      .catch(e => {
        dispatch({ type: msg.FETCH_TODOS_FAILURE });
        return e;
      });
  };
}
