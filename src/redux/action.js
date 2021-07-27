export const increment = (number) => {
  return {
    type: "Increment",
    nm: number,
  };
};

export const decrement = (number) => {
  return {
    type: "Decrement",
    nm: number,
  };
};

export const user = (name) => {
  return {
    type: "User",
    user: name,
  };
};
