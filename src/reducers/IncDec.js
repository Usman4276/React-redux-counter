const initialState = 0;

export default function incDec(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return state +1;
      // return {
      //   ...state,
      //   payload: action.payload,
      // };
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
