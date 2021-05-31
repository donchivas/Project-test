import {NewsActionTypes} from "./actionTypes";

const initialState = {
    newsList: [],
    selectedCategory: "trending",
    isLoading: true,
    searchQ: "",
}

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case NewsActionTypes.START_NEWS_FETCHING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case NewsActionTypes.FINISHED_NEWS_FETCHING: {
            return {
                ...state,
                newsList: action.payload,
                isLoading: false
            }
        }
        case NewsActionTypes.RESET_SEARCH: {
            return {
                ...state,
                searchQ: initialState.searchQ,
                selectedCategory: initialState.selectedCategory,
            }
        }
        case NewsActionTypes.CHANGE_SEARCH_Q: {
            return {
                ...state,
                searchQ: action.payload
            }
        }
        case NewsActionTypes.CHANGE_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload,
                searchQ: ""
            }
        }
        default:
            return state;
    }
}