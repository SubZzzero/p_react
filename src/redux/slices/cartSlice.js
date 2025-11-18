import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0)
        },
        increaseItem(state, action) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item) item.count++;

            state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
        },
        decreaseItem(state, action) {
            const item = state.items.find(obj => obj.id === action.payload)
            if (item && item.count > 1) item.count--;
            state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
        },

        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
        },
        clearItems(state) {
            state.items = []
        }
    }

})



export const { addItem, removeItem, clearItems, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;