// =============== Action types =============== //
export const SHOW_PELINGGIH = "SHOW_PELINGGIH";

// =============== Reducer =============== //
const initialState = {
    pelinggih: null,
  };
  
  const Denah = (state = initialState, action) => {
    switch (action.type) {
      case "SHOW_PELINGGIH":
        return { counter: payload };
    }
    return state;
  };
  
  export default Denah;