import { useReducer } from 'react';  
  
interface SearchState {  
  searchTerm: string;  
}  
  
type SearchAction = {  
  type: 'SET_SEARCH_TERM';  
  payload: string;  
};  
  
const searchReducer = (state: SearchState, action: SearchAction): SearchState => {  
  switch (action.type) {  
    case 'SET_SEARCH_TERM':  
      return { ...state, searchTerm: action.payload };  
    default:  
      return state;  
  }  
};  
  
const useSearch = () => {  
  const [state, dispatch] = useReducer(searchReducer, { searchTerm: '' });  
  
  const setSearchTerm = (searchTerm: string) => {  
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm });  
  };  
  
  return { searchTerm: state.searchTerm, setSearchTerm };  
};  
  
export default useSearch;  
