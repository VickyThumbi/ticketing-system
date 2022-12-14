export const initialState = {

  user: null
};
export const actionTypes = {
  SET_USER: "SET_USER",
};
// Selector
const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};
export default userReducer;