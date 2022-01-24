import { FOOD_SEARCH, FOOD_SEARCH_FAIL, FOOD_SEARCH_SUCCESS } from './actionType';

export const search = (foodName: string) => {
  return {
    type: FOOD_SEARCH,
    payload: { foodName },
  };
};

export const searchSuccess = (data: any[]) => {
  /*
DESC_KOR: "스팀우유" ->식품이름

MAKER_NAME: "크리스피크림도넛" -> 제조사
NUTR_CONT1: "169" -> 열량(kcal)(1회제공량당)
NUTR_CONT2: "" -> 탄수화물(g)(1회제공량당)
NUTR_CONT3: "8" -> 단백질(g)(1회제공량당)

  */

  const foodData = data.map((el) => {
    const { DESC_KOR: foodName, MAKER_NAME: maker, NUTR_CONT1: calorie, NUTR_CONT2: carbohydrate, NUTR_CONT3: protein } = el;

    return { foodName, maker, calorie, carbohydrate, protein };
  });

  return {
    type: FOOD_SEARCH_SUCCESS,
    payload: { foodData },
  };
};

export const searchFail = (error: any) => {
  return {
    type: FOOD_SEARCH_FAIL,
    payload: { error },
  };
};
