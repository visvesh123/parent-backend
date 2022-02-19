export const notiReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_NOTIFICATION":
        return [...state,action.payload.item];
  
      default:
        return state;
    }
  };

export const notiSomReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_SOM_NOTIFICATION":
        return [...state,action.payload.item];
  
      default:
        return state;
    }
  };

