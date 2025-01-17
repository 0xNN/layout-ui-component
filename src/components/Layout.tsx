import React, { Component } from 'react';  
import { SearchProvider } from '../context/SearchContext';  
import Navbar from './Navbar';  
import Sidebar from './Sidebar';  
import Content from './Content';  
import Footer from './Footer';  
import { MenuItem } from '../types';  
  
interface LayoutProps {  
  children: React.ReactNode;  
  title: React.ReactNode;  
  menuItems?: MenuItem[];  
  showSearch?: boolean;  
  showSidebar?: boolean;  
  bgColor?: string;  
  color?: string;  
  projectName?: string;  
  logo?: React.ReactNode;  
  activePath: string;  
  logoCollapsed?: React.ReactNode;
  onMenuItemClick: (path: string) => void;  
}  
  
interface LayoutState {  
  isSidebarCollapsed: boolean;  
}  
  
class Layout extends Component<LayoutProps, LayoutState> {  
  constructor(props: LayoutProps) {  
    super(props);  
    this.state = {  
      isSidebarCollapsed: false,  
    };  
  }  
  
  toggleSidebar = () => {  
    this.setState(prevState => ({  
      isSidebarCollapsed: !prevState.isSidebarCollapsed,  
    }));  
  };  
  
  render() {  
    const {   
      children,   
      title = 'My App',   
      showSearch = false,   
      menuItems = [],   
      showSidebar = true,   
      bgColor = 'bg-gray-800',   
      color = 'text-gray-100',   
      projectName = 'My App',  
      logo,  
      activePath,  
      logoCollapsed,
      onMenuItemClick  
     } = this.props;    
    const { isSidebarCollapsed } = this.state;    
  
    return (    
      <SearchProvider>    
        <div className="flex flex-col h-screen">    
          <div className="flex flex-1 overflow-hidden">    
            {showSidebar && (    
              <div className="relative my-2 ml-2 opacity-100">    
                <Sidebar    
                  title={title}    
                  showSearch={showSearch}    
                  menuItems={menuItems}    
                  isCollapsed={isSidebarCollapsed}    
                  bgColor={bgColor}    
                  color={color}    
                  activePath={activePath}    
                  logoCollapsed={logoCollapsed}    
                  onMenuItemClick={onMenuItemClick}    
                />    
                <button    
                  type="button"    
                  className={`absolute top-3 right-[-12px] sm:right-[-12px] md:right-[-12px] lg:right-[-12px] flex items-center justify-center p-1 rounded-full border border-stone-200 text-stone-500 ${bgColor} hover:text-stone-700 hover:bg-stone-100 focus:outline-none`}    
                  onClick={this.toggleSidebar}    
                >    
                  <span className="absolute -inset-0.5"></span>    
                  <span className="sr-only">Toggle sidebar</span>    
                  <svg className={`block size-4 ${isSidebarCollapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">    
                    {isSidebarCollapsed ? (    
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />    
                    ) : (    
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />    
                    )}    
                  </svg>    
                </button>    
              </div>    
            )}    
            <div className="flex-1 overflow-y-auto">
              <Navbar bgColor={bgColor} color={color} projectName={projectName} logo={logo} logoCollapsed={logoCollapsed} isCollapsed={isSidebarCollapsed} /> 
              <div className="flex-1 overflow-y-auto pt-16">      
                <Content>      
                  {children}      
                </Content>      
              </div>    
            </div>    
          </div>    
          {/* <Footer bgColor={bgColor} color={color} />     */}
        </div>    
      </SearchProvider>    
    );    
  }  
}  
  
export default Layout;  
