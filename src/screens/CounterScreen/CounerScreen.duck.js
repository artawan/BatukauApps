// =============== Action types =============== //
export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

// =============== Reducer =============== //
const initialState = {
    counter: 0,
  };
  
  const Counter = (state = initialState, action) => {
    switch (action.type) {
      case "INCREASE_COUNTER":
        return { counter: state.counter + 1 };
      case "DECREASE_COUNTER":
        return { counter: state.counter - 1 };
    }
    return state;
  };
  
  export default Counter;
  

