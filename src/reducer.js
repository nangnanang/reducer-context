export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BTN":
      console.log(state);
      return [...state, action.payload];

    case "DELETE_BTN":
      return state.filter(
        (element) => element.id !== Number(action.payload.id)
      );
    default:
      return state;
  }
};
