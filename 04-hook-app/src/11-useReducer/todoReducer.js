import * as Actions from "./actions/todoActions";
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...initialState, action.payload];
    case Actions.REMOVE_TODO:
      return initialState.filter(
        (item) => item.id !== action.payload
      );
    case Actions.TOGGLE_TODO:
      return initialState.map((item) => {
        if (item.id === action.payload) item.done = !item.done;
        return item;
      });
    default:
      break;
  }
};
