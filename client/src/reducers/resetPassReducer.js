export default (state = [], action) => {
  switch (action.type) {
    case "RESET_PASSWORD":
      return [...state, action.payload];

    default:
      return state;
  }
};
