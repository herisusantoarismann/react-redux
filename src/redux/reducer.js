const initialState = {
  counter: 10,
  user: " ",
};

const counter = (state = initialState.counter, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.nm;
    case "Decrement":
      return state - action.nm;
    default:
      return state;
  }
};

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case "User":
      return action.user;
    default:
      return state;
  }
};

export { counter, user };
