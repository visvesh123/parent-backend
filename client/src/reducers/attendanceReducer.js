export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ATTENDANCE":
      return [action.payload.Attendance];

    default:
      return state;
  }
};
