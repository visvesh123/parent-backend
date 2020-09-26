export default (
  state = { inout: "IN", remarks: "", username: "", submitted: false },
  action
) => {
  switch (action.type) {
    case "SEC_INOUT":
      return {
        ...state,
        inout: action.payload.MOVING,
      };

    case "SEC_REMARKS":
      return {
        ...state,
        remarks: action.payload.REMARKS,
      };

    case "SEC_USER":
      return {
        ...state,
        username: action.payload.username,
      };
    case "SEC_SUBMIT":
      return {
        ...state,
        submitted: true,
      };
    default:
      return state;
  }
};
