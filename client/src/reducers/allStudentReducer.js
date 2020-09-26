export default (state = [], action) => {
  switch (action.type) {
    case "ALL_STUDENTS":
      return [...state, action.payload];

    default:
      return state;
  }
};
