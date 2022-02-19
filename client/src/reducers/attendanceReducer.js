export const attendanceReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ATTENDANCE":
      return [action.payload.Attendance];

    default:
      return state;
  }
};

export const attendanceSomReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SOM_ATTENDANCE":
      return [action.payload.Attendance];

    default:
      return state;
  }
};