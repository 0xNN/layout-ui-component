import React, { Component, createContext, ReactNode } from 'react';  
  
interface MenuContextType {  
  searchTerm: string;  
  setSearchTerm: (term: string) => void;  
}  
  
const MenuContext = createContext<MenuContextType | undefined>(undefined);  
  
interface MenuProviderProps {  
  children: ReactNode; // Menambahkan tipe untuk children  
}  
  
export class MenuProvider extends Component<MenuProviderProps> {  
  state = {  
    searchTerm: '',  
  };  
  
  setSearchTerm = (term: string) => {  
    this.setState({ searchTerm: term });  
  };  
  
  render() {  
    const { children } = this.props; // Mengambil children dari props  
    const { searchTerm } = this.state;  
  
    return (  
      <MenuContext.Provider value={{ searchTerm, setSearchTerm: this.setSearchTerm }}>  
        {children}  
      </MenuContext.Provider>  
    );  
  }  
}  
  
export const MenuConsumer = MenuContext.Consumer;  
