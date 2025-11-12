import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"],
    activeCategory: 0,

    sort: {
        label: "Popularity: highest first", sort: "rating", order: "desc"
    }
}

const categoriesSlice = createSlice({
    name: "filters",
    initialState,

    reducers: {
        setActiveCategory(state, action) {
            state.activeCategory = action.payload;
            console.log(state.activeCategory)
        },
        setSort(state, action) {
            state.sort = action.payload;
        }

    }

})



export const { setActiveCategory, setSort } = categoriesSlice.actions;
export default categoriesSlice.reducer;