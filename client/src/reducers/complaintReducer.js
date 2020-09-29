export default (
  state = { griev: "Other", description: "", mail: [] },
  action
) => {
  switch (action.type) {
    case "SEND_COMPLAINT":
      return {
        ...state,
        // type: action.payload.griev,
        // description: action.payload.desc,
      };

    case "SENT_COMPLAINT":
      return {
        ...state,
        griev: null,
        description: null,
      };

    case "FETCH_TYPE":
      return {
        ...state,
        griev: action.payload.griev,
      };

    case "FETCH_DESC":
      return {
        ...state,
        description: action.payload.desc,
      };
    case "FETCH_MAIL":
      return {
        ...state,
        mail: action.payload.mail,
      };
    default:
      return state;
  }
};
