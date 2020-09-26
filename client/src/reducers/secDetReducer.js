export default (state = [], action) => {
  switch (action.type) {
    case "SEC_DETAILS":
      return [action.payload];

    default:
      return state;
  }
};
