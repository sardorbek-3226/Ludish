import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        counter: 0,
        },
        reducers:{
            increment: (state , action ) => {
                state.counter += action.payload;
            },
            decrement: (state, action)=>{
                state.counter -= action.payload;
            },
            incrementByAmount: (state, action) => {
                state.counter += action.payload;
            },
        },
});

// export const increment = counterSlice.actions.increment;
// export const decrement = counterSlice.actions.decrement;


export const {increment, decrement, incrementByAmount} = counterSlice.actions;


export default counterSlice.reducer;