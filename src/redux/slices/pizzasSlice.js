import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async ({ inputSearch }, thunkAPI) => {
        const filters = thunkAPI.getState().filters;
        const { categories, activeCategory, sort, currentPage } = filters;
        const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?";

        const category = categories[activeCategory];

        const search =
            category === "All" && inputSearch
                ? `&search=${inputSearch}`
                : "";

        const apiUrl =
            category === "All"
                ? `${URL}page=${currentPage}&limit=10&sortBy=${sort.sort}&order=${sort.order}${search}`
                : `${URL}filter=${category}&sortBy=${sort.sort}&order=${sort.order}`;

        const res = await axios.get(apiUrl);
        return Array.isArray(res.data) ? res.data : [];
    }
);

const pizzasSlice = createSlice({
    name: "pizzas",

    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.items = [];
                console.log("pending")
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                console.log("fulfield")
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.isLoading = false;
                state.error = "error loading";
                state.items = [];
            });
    },
});

export default pizzasSlice.reducer;
