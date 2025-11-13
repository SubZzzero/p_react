import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"],
    activeCategory: 0,

    sort: {
        label: "Popularity: highest first", sort: "rating", order: "desc"
    },
    currentPage: 1
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
        }

    }

})



export const { setActiveCategory, setSort, setCurrentPage } = categoriesSlice.actions;
export default categoriesSlice.reducer;