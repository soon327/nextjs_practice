import { FOOD_SEARCH, FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from './actionType';

export const search = (foodName: string) => {
  return {
    type: FOOD_SEARCH,
    payload: { foodName },
  };
};

export const searchSuccess = (data: any) => {
  return {
    type: FOOD_SEARCH_SUCCESS,
    payload: { data },
  };
};

export const searchFail = (error: any) => {
  return {
    type: FOOD_SEARCH_FAIL,
    payload: { error },
  };
};
