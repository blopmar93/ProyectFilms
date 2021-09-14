import { Action, iSearchRState } from '../types/interface/interfaces';
import { types } from "../types/types";


export const initialState: iSearchRState = {
    Results : [],
    Find    : 'movie'
}

export const searchReducer = ( state = initialState, action:Action ) => {

    switch (action.type) {
        case types.searchSetResults:
            return {
                ...state,
                Results: action.payload
            }
        
        case types.searchDeleteResults:
            return{
                ...state,
                Results: []
            }

        case types.searchSetFindMovie:
            return{
                ...state,
                Find: 'movie'
            }

        case types.searchSetFindSerie:
            return{
                ...state,
                Find: 'tv'
            }
    
        default: return state;
    }
}