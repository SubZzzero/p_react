import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

type ChangeCartItemPayload = {
    id: string;
    type: string;
    size: number;
};

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

const initialState: CartSliceState = {
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(
                item =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = state.items.reduce(
                (sum, item) => sum + item.price * item.count, 0
            )
        },

        increaseItem(state, action: PayloadAction<ChangeCartItemPayload>) {
            const item = state.items.find(
                obj =>
                    obj.id === action.payload.id &&
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size
            );

            if (item) item.count++;

            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price * obj.count, 0
            );
        },

        decreaseItem(state, action: PayloadAction<ChangeCartItemPayload>) {
            const item = state.items.find(
                obj =>
                    obj.id === action.payload.id &&
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size
            );

            if (item && item.count > 1) item.count--;

            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price * obj.count, 0
            );
        },

        removeItem(state, action: PayloadAction<ChangeCartItemPayload>) {
            state.items = state.items.filter(
                obj =>
                    !(
                        obj.id === action.payload.id &&
                        obj.type === action.payload.type &&
                        obj.size === action.payload.size
                    )
            );

            state.totalPrice = state.items.reduce(
                (sum, obj) => sum + obj.price * obj.count, 0
            );
        },

        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const {
    addItem,
    removeItem,
    clearItems,
    increaseItem,
    decreaseItem
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const selectCartItem = (
    state: RootState,
    id: string,
    type: string,
    size: number
) =>
    state.cart.items.find(
        item =>
            item.id === id &&
            item.type === type &&
            item.size === size
    );

export default cartSlice.reducer;
