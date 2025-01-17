import { createStore } from 'redux';  
  
// Action Types  
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';  
  
// Action Creators  
export const setSearchTerm = (searchTerm: string) => ({  
  type: SET_SEARCH_TERM,  
  payload: searchTerm,  
});  
  
// Initial State  
const initialState = {  
  searchTerm: '',  
};  
  
// Reducer  
const searchReducer = (state = initialState, action: any) => {  
  switch (action.type) {  
    case SET_SEARCH_TERM:  
      return {  
        ...state,  
        searchTerm: action.payload,  
      };  
    default:  
      return state;  
  }  
};  
  
// Create Store  
const store = createStore(searchReducer);  
  
export default store;  
