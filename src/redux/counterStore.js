import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'

// define logic to create a store
const counterStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})
export default counterStore