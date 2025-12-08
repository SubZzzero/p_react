import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";


export type SortFeature = {
    label: string;
    sort: string;
    order: string;
}

type SetFiltersPayload = {
    currentPage: number;
    activeCategory: number;
    sort: SortFeature;
}

interface filterSliceState {
    categories: string[];
    activeCategory: number;
    sort: SortFeature;
    currentPage: number;
    search: string;
}

const initialState: filterSliceState = {
    categories: ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"],
    activeCategory: 0,

    sort: {
        label: "Popularity: highest first", sort: "rating", order: "desc"
    },
    currentPage: 1,
    search: "",

}

const categoriesSlice = createSlice({
    name: "filters",
    initialState,

    reducers: {
        setActiveCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload;
            state.currentPage = 1;
        },
        setSort(state, action: PayloadAction<SortFeature>) {
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<SetFiltersPayload>) {
            state.currentPage = Number(action.payload.currentPage);
            state.activeCategory = Number(action.payload.activeCategory);
            state.sort = action.payload.sort;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        }

    }

})



export const { setActiveCategory, setSort, setCurrentPage, setFilters, setSearch } = categoriesSlice.actions;
export const selectFilters = (state: RootState) => state.filters;
export const selectSort = (state: RootState) => state.filters.sort;
export default categoriesSlice.reducer;