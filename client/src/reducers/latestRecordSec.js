export default (state = [], action) => {
    switch (action.type) {
      case "LATEST_RECORD":
        return [action.payload];
  
      default:
        return state;
    }
  };
  