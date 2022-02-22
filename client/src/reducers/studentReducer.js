export const studentReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STUDENT":
      return [action.payload];

    default:
      return state;
  }
};

export const studentSomReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SOM_STUDENT":
      return [action.payload];

    default:
      return state;
  }
};