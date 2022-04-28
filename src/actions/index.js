import axios from "axios";

//Action Creators
export function increment() {
  
  return {
    type: "increment",
    // payload:res,
  };
}

export function decrement() {
  return {
    type: "decrement",
  };
}

//Thunk function Action Creators
// export function thunkFunctionActionCreator() {
//   //Thunk function
//   return async function thunkFunction(dispatch) {
//     try {
      
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );
      
//       dispatch(increment(response))
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
