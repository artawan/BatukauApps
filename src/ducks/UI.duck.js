import { useWindowDimensions } from "react-native";

/*============ Action Type ============*/

export const TOGGLE_THEME = "TOGGLE_THEME";
export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";
export const NAVIGATE = "NAVIGATE";


// =============== Reducer =============== //
const initialState ={
  counter: 0,
  theme: {colorData: {name: "red"}}
}

const UI = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE_COUNTER:
        return { counter: state.counter + 1 };
      case DECREASE_COUNTER:
        return { counter: state.counter - 1 };
    }
    return state;
  };

export default UI;
// =============== Action Creators =============== //