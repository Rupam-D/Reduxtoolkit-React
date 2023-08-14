// create slice
import { createSlice } from "@reduxjs/toolkit"

const itemSlice = createSlice({
     initialState: [],
     name: "item",
     reducers: {
          addItem(state, action) {
               state.push(action.payload)
          },
          removeItem(state, action) {
               state.pop()
          }
     }
})
export default itemSlice


// console.log(itemSlice.actions) giv all action creators
// de-structuring of object
export const { addItem, removeItem } = itemSlice.actions