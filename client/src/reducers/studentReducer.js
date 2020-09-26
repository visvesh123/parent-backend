export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_STUDENT":
      return [...state, action.payload];

    default:
      return state;
  }
};
