import { GET_REGION, GET_ROUTELIST, POST_TRANSFER } from "./actionTypes";

let nextTodoId = 0;

export const getRegion = content => ({
  type: GET_REGION,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const getRouteList = id => ({
  type: GET_ROUTELIST,
  payload: { id }
});

export const setFilter = transfer => ({
  type: POST_TRANSFER,
  payload: { transfer }
});
