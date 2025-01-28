import React, { Component } from 'react';
import { SearchConsumer } from '../context/SearchContext';
import { MenuItem } from '../types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface SidebarProps {
  title?: React.ReactNode;
  showSearch?: boolean;
  menuItems?: MenuItem[];
  bgColor?: string;
  color?: string;
  isCollapsed: boolean;
  activePath?: string;
  logoCollapsed?: React.ReactNode;
  logo?: React.ReactNode;
  onMenuItemClick?: (path: string) => void;
}

interface SidebarState {
  expandedItems: { [key: string]: boolean };
  isHovered: boolean;
}

class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      expandedItems: {},
      isHovered: false
    };
  }

  toggleExpand = (path: string) => {
    this.setState(prevState => ({
      expandedItems: {
        ...prevState.expandedItems,
        [path]: !prevState.expandedItems[path],
      },
    }));
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { title, showSearch = false, menuItems = [], bgColor = 'bg-stone-500', color = 'text-white', isCollapsed, activePath, logoCollapsed, logo, onMenuItemClick } = this.props;
    const { isHovered } = this.state;

    return (
      <SearchConsumer>
        {({ searchTerm, setSearchTerm }) => {
          const filteredMenuItems = menuItems.map(item => {
            const subItems = item.subItems || [];
            const filteredSubItems = subItems.filter(subItem =>
              subItem.label.toLowerCase().includes(searchTerm.toLowerCase())
            );

            return {
              ...item,
              subItems: filteredSubItems,
              isVisible: item.label.toLowerCase().includes(searchTerm.toLowerCase()) || filteredSubItems.length > 0,
            };
          }).filter(item => item.isVisible);

          return (
            <aside
              onMouseEnter={this.handleMouseEnter}  
              onMouseLeave={this.handleMouseLeave}  
              className={`${bgColor} ${color} ${isCollapsed && !isHovered ? 'w-20' : 'w-64'} h-full transition-all duration-300 ease-in-out border border-stone-200 rounded-lg shadow-lg shadow-stone-300/40`}>
              {/* Judul Sidebar */}
              {/* <div className={`flex items-center justify-between mb-4 delay-100 ${isCollapsed && !isHovered ? 'hidden' : ''}`}>
                <h2 className="text-lg">{title}</h2>
              </div> */}
              {/* Input Pencarian */}
              {!isCollapsed ? (
                <div className={`mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center`}>
                  {logoCollapsed}
                </div>
              ) : (
                isHovered ?
                <div className={`mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center`}>
                  {logoCollapsed}
                </div> :
                <div className={`mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center`}>
                  {logo}
                </div>
              )}
              <hr style={{
                color: '#e3e3e3',
                borderColor: '#e3e3e3',
                marginBlockEnd: 0,
                marginBlockStart: 0
              }} />
              {showSearch && (
                <div className={`mb-4 px-4 pt-4 delay-100 ${isCollapsed && !isHovered ? 'hidden' : ''}`}>
                  <div className="flex items-center border border-blue-400 rounded-lg bg-blue-100">
                    <svg style={{ marginLeft: 10 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search Menu..."
                      className="w-full p-2 bg-blue-100 text-indigo-800 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}
              {/* Menu Items */}
              <ul
                className={`px-4 pb-4 overflow-y-auto delay-100 transition ease-in-out duration-300 ${isCollapsed && !isHovered ? 'pt-4' : ''}`}
                style={{ maxHeight: 'calc(100vh - 220px)', overflowY: 'auto' }}
              >
                {filteredMenuItems.map((item, index) => {
                  const subItems = item.subItems || [];
                  const originalItem = menuItems.find(menuItem => menuItem.path === item.path);
                  const hasOriginalSubItems = originalItem?.subItems && originalItem.subItems.length > 0;
                  const isExpanded = this.state.expandedItems[item.path] || (hasOriginalSubItems && searchTerm !== '');

                  return (
                    <li key={index} className="mb-2 delay-100 transition ease-in-out duration-300">
                      <div
                        onClick={() => subItems.length > 0 ? this.toggleExpand(item.path) : onMenuItemClick?.(item.path)}
                        className={`cursor-pointer align-middle rounded-lg p-3 block transition ease-in-out duration-300 ${activePath === item.path ? 'bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white' : `${bgColor} text-indigo-900 hover:bg-indigo-900 hover:text-white`}`}
                      >
                        <div className="flex items-center justify-between w-full">
                          {isCollapsed && !isHovered ? (
                            <div className="flex items-center">
                              {item.icon && <span className="mr-2">{item.icon}</span>}
                            </div>
                          ) : (
                            <div className="flex items-center truncate">
                              {item.icon && <span className="mr-2">{item.icon}</span>}
                              <p className="truncate">{item.label}</p>
                            </div>
                          )}
                          {subItems.length > 0 && (
                            isCollapsed && !isHovered ? (
                              <></>
                            ) : (
                              // animate icon dropdown when isExpanded with rotate
                              <span className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                                {item.iconClose ? item.iconClose : <KeyboardArrowRightIcon />}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      {subItems.length > 0 && (
                        <ul
                          className={`overflow-hidden transition-max-height duration-300 ease-in-out bg-blue-100 rounded-lg ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
                        >
                          {subItems.map((subItem, subIndex) => (
                            // jika subItem bukan yang terakhir, tambahkan tambahkan mb-2  
                            <li key={subIndex} className={`${subIndex !== subItems.length - 1 ? 'mb-2' : ''}`}>
                              {isCollapsed && !isHovered ? (
                                <div
                                  className={`cursor-pointer align-middle rounded-lg p-3 block transition ease-in-out duration-300 ${activePath === subItem.path ? 'bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white' : 'bg-blue-100 text-indigo-900 hover:bg-indigo-900 hover:text-white'}`}
                                  onClick={() => onMenuItemClick?.(subItem.path)}
                                >
                                  {subItem.icon && <span className="mr-2 ml-px">{subItem.icon}</span>}
                                </div>
                              ) : (
                                <div className={`cursor-pointer flex items-center align-middle rounded-lg p-3 block transition ease-in-out duration-300 truncate ${activePath === subItem.path ? 'bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white' : 'bg-blue-100 text-indigo-900 hover:bg-indigo-900 hover:text-white'}`}
                                  onClick={() => onMenuItemClick?.(subItem.path)}
                                >
                                  {subItem.icon && <span className="mr-2 ml-4">{subItem.icon}</span>}
                                  <p className="truncate">{subItem.label}</p>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </aside>
          );
        }}
      </SearchConsumer>
    );
  }
}

export default Sidebar;  
