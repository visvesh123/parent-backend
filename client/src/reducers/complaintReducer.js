export default (state = { griev: "Other", description: "" }, action) => {
  switch (action.type) {
    case "SEND_COMPLAINT":
      return {
        ...state,
        type: action.payload.type,
        description: action.payload.description,
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

    default:
      return state;
  }
};
