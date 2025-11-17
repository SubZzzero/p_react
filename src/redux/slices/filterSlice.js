import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"],
    activeCategory: 0,

    sort: {
        label: "Popularity: highest first", sort: "rating", order: "desc"
    },
    currentPage: 1,

}

const categoriesSlice = createSlice({
    name: "filters",
    initialState,

    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;

        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            state.activeCategory = Number(action.payload.activeCategory);
            state.sort = action.payload.sort;

        }
    }

})



export const { setActiveCategory, setSort, setCurrentPage, setFilters } = categoriesSlice.actions;
export default categoriesSlice.reducer;