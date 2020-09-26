export const minor1Reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MINOR1":
      return [action.payload];

    default:
      return state;
  }
};

export const minor2Reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MINOR2":
      return [action.payload];

    default:
      return state;
  }
};

export const finalReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FINAL":
      return [action.payload];

    default:
      return state;
  }
};

export const suppleReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUPPLEMENTARY":
      return [action.payload];

    default:
      return state;
  }
};

export const internalReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_INTERNALS":
      return [action.payload];

    default:
      return state;
  }
};

export const majorReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MAJOR":
      return [action.payload];

    default:
      return state;
  }
};

export const cgpaReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CGPA":
      return [...state, action.payload];

    default:
      return state;
  }
};
