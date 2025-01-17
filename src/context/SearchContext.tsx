import React, { createContext, Component, ReactNode } from 'react';  
  
interface SearchContextType {  
  searchTerm: string;  
  setSearchTerm: (searchTerm: string) => void;  
}  
  
const SearchContext = createContext<SearchContextType>({  
  searchTerm: '',  
  setSearchTerm: () => {},  
});  
  
interface SearchProviderProps {  
  children: ReactNode;  
}  
  
export class SearchProvider extends Component<SearchProviderProps, { searchTerm: string }> {  
  constructor(props: SearchProviderProps) {  
    super(props);  
    this.state = {  
      searchTerm: '',  
    };  
  }  
  
  setSearchTerm = (searchTerm: string) => {  
    this.setState({ searchTerm });  
  };  
  
  render() {  
    return (  
      <SearchContext.Provider value={{ searchTerm: this.state.searchTerm, setSearchTerm: this.setSearchTerm }}>  
        {this.props.children}  
      </SearchContext.Provider>  
    );  
  }  
}  
  
export const SearchConsumer = SearchContext.Consumer;
