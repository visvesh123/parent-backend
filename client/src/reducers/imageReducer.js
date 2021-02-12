export default (state = [], action) => {
    switch (action.type) {
      case "IMAGE_RECORD":
        return [action.payload];
  
      default:
        return state;
    }
  };
  