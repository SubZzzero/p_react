import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const filters = state.filters;
        const { categories, activeCategory, sort, currentPage, search } = filters;

        const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?";
        const category = categories[activeCategory];

        const searchQuery =
            category === "All" && search ? `&search=${search}` : "";

        const apiUrl =
            category === "All"
                ? `${URL}page=${currentPage}&limit=10&sortBy=${sort.sort}&order=${sort.order}${searchQuery}`
                : `${URL}filter=${category}&sortBy=${sort.sort}&order=${sort.order}`;

        const res = await axios.get(apiUrl);
        return Array.isArray(res.data) ? res.data : [];
    }
);

export type PizzasItems = {
    id: string;
    name: string
    price: number;
    imageUrl: string;
    size: number[];
    count: number;
};

interface PizzaSliceState {
    items: PizzasItems[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PizzaSliceState = {
    items: [],
    isLoading: false,
    error: null,
};

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.isLoading = false;
                state.error = "error loading";
                state.items = [];
            });
    },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;
