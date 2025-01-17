import React, { Component } from 'react';  
  
interface NavbarState {  
  isDropdownOpen: boolean;  
}  
  
interface NavbarProps {  
  bgColor?: string;
  color?: string;
  projectName?: React.ReactNode;
  logo?: React.ReactNode;
  logoCollapsed?: React.ReactNode;
  isCollapsed?: boolean;
}

class Navbar extends Component<NavbarProps, NavbarState> {  
  constructor(props: NavbarProps) {  
    super(props);  
    this.state = {  
      isDropdownOpen: false,  
    };  
  }  
  
  toggleDropdown = () => {  
    this.setState(prevState => ({  
      isDropdownOpen: !prevState.isDropdownOpen,  
    }));  
  };  
  
  closeDropdown = () => {  
    this.setState({ isDropdownOpen: false });  
  };  
  
  render() {  
    const { isDropdownOpen } = this.state;  
    const { bgColor, color, projectName = 'My App', logo, logoCollapsed } = this.props;  
  
    return (  
      <nav className={`${bgColor} ${color} border-b border-stone-200 shadow-lg shadow-stone-300/20 backdrop-blur-md transition-colors supports-backdrop-blur:bg-white/95 fixed top-2 right-2 z-50`} style={{ width: 'calc(100% - 64px)' }}>  
        <div className="px-2 sm:px-2 lg:px-4">  
          <div className="relative flex h-16 items-center justify-between">  
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">  
              <button  
                type="button"  
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"  
                aria-controls="mobile-menu"  
                aria-expanded={isDropdownOpen}  
                onClick={this.toggleDropdown}  
              >  
                <span className="absolute -inset-0.5"></span>  
                <span className="sr-only">Open main menu</span>  
                <svg className={`block size-6 ${isDropdownOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />  
                </svg>  
                <svg className={`hidden size-6 ${isDropdownOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />  
                </svg>  
              </button>  
            </div>  
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">  
              <div className="flex shrink-0 items-center">
                <div className="ml-2 transition-all duration-700 ease-in-out">
                  {!this.props.isCollapsed ? (  
                    logoCollapsed  
                  ) : (  
                    logo  
                  )}
                </div>
                {projectName !== 'My App' && (
                  // <>{projectName}</>
                  this.props.isCollapsed ? (
                    <div className="text-xl font-bold transition-all duration-700 ease-in-out">{projectName}</div>
                  ) : (
                    <></>
                  )
                )}
                {projectName === 'My App' && (  
                  <h1 className="ml-3 text-xl font-bold">{projectName}</h1>  
                )}
              </div>  
              {/* <div className="hidden sm:ml-6 sm:block">  
                <div className="flex space-x-4">  
                  <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>  
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>  
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>  
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>  
                </div>  
              </div>   */}
            </div>  
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">  
              <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">  
                <span className="absolute -inset-1.5"></span>  
                <span className="sr-only">View notifications</span>  
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">  
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />  
                </svg>  
              </button>  
  
              <div className="relative ml-3">  
                <div>  
                  <button  
                    type="button"  
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  
                    id="user-menu-button"  
                    aria-expanded={isDropdownOpen}  
                    aria-haspopup="true"  
                    onClick={this.toggleDropdown}  
                  >  
                    <span className="absolute -inset-1.5"></span>  
                    <span className="sr-only">Open user menu</span>  
                    <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />  
                  </button>  
                </div>  
                <div  
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ${isDropdownOpen ? 'block' : 'hidden'}`}  
                  role="menu"  
                  aria-orientation="vertical"  
                  aria-labelledby="user-menu-button"  
                  tabIndex={-1}  
                  onClick={this.closeDropdown}  
                >  
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>  
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>  
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
        {/* <div className={`sm:hidden ${isDropdownOpen ? 'block' : 'hidden'}`} id="mobile-menu">  
          <div className="space-y-1 px-2 pb-3 pt-2">  
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>  
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>  
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>  
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>  
          </div>  
        </div>   */}
      </nav>  
    );  
  }  
}  
  
export default Navbar;
