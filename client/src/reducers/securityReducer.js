export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_INOUT":
      return [...state, action.payload.security];

    default:
      return state;
  }
};
