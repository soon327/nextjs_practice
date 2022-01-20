import { FOOD_SEARCH, FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from './actionType';

export const search = (payload: any) => {
  return {
    type: FOOD_SEARCH,
    payload,
  };
};

export const searchSuccess = (data: any) => {
  return {
    type: FOOD_SEARCH_SUCCESS,
    data,
  };
};

export const searchFail = (error: any) => {
  return {
    type: FOOD_SEARCH_FAIL,
    error,
  };
};
