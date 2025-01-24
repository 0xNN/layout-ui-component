import React, { Component } from 'react';
import NotificationBell from '../assets/NotificationBell';

interface NavbarState {
  isDropdownOpen: boolean;
  isFullscreen: boolean;
}

interface NavbarProps {
  bgColor?: string;
  color?: string;
  projectName?: React.ReactNode;
  logo?: React.ReactNode;
  logoCollapsed?: React.ReactNode;
  isCollapsed?: boolean;
  className?: string;
  scrollY: number;
  notifCount?: number; 
  role?: string;
  userName?: string;
  baseUrl?: string;
  showNotification?: boolean;
  handleLogout: () => void;
  handleNotification: () => void;
} 

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isFullscreen: false,
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

  toggleFullscreen = () => {
    const { isFullscreen } = this.state;
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    } else {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).mozRequestFullScreen) {
        (element as any).mozRequestFullScreen();
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen();
      }
    }
    this.setState(prevState => ({
      isFullscreen: !prevState.isFullscreen,
    }));
  };

  handleFullscreenChange = () => {
    this.setState({ isFullscreen: !!document.fullscreenElement });
  };

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.addEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullscreenChange);
    document.removeEventListener('msfullscreenchange', this.handleFullscreenChange);
  }

  render() {
    const { isDropdownOpen, isFullscreen } = this.state;
    const { bgColor, color, projectName = 'My App', logo, logoCollapsed, isCollapsed, className, scrollY, notifCount, role, userName, baseUrl, showNotification, handleLogout, handleNotification } = this.props;
    const isBlurred = scrollY > 0;

    return (
      <nav className={`${className} ${color} backdrop-blur-md transition-all duration-300 fixed ml-5 mr-5 top-2 z-50`} style={{
        width: isCollapsed ? 'calc(100vw - 125px)' : 'calc(100vw - 301px)',
        backdropFilter: isBlurred ? 'blur(40px)' : 'none',
      }}>
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
            {/* <div className="cursor-pointer py-2 px-4 transition ease-in-out duration-300 rounded-md bg-indigo-900 text-white opacity-90 hover:bg-indigo-700 hover:text-white" onClick={() => window.location.href = '/'}>HOME</div> */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                {/* <div className="ml-2">
                  {!this.props.isCollapsed && (
                    logo
                  )}
                </div> */}
                {projectName !== 'My App' && (
                  // <>{projectName}</>
                  this.props.isCollapsed ? (
                    <div className="text-xl font-bold text-indigo-800">{projectName}</div>
                  ) : (
                    // <></>
                    <div className="text-xl font-bold text-indigo-800">{projectName}</div>
                  )
                )}
                {projectName === 'My App' && (
                  <h1 className="ml-3 text-xl font-bold text-indigo-800">{projectName}</h1>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="relative p-1" onClick={this.toggleFullscreen}>
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Toggle fullscreen</span>
                {isFullscreen ?
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.82769 3.44452L14.1614 13.7782" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.55003 1.72244L2.10544 1.72241L2.10547 5.16699" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6609 10.8328L14.6609 14.2774L11.2163 14.2773" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9385 3.44415L2.60486 13.7778" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6606 5.16721L14.6606 1.72263L11.2161 1.72266" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.54978 14.2776L2.1052 14.2776L2.10522 10.833" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> :
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.82769 3.44452L14.1614 13.7782" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.55003 1.72244L2.10544 1.72241L2.10547 5.16699" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6609 10.8328L14.6609 14.2774L11.2163 14.2773" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.9385 3.44415L2.60486 13.7778" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6606 5.16721L14.6606 1.72263L11.2161 1.72266" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.54978 14.2776L2.1052 14.2776L2.10522 10.833" stroke="#2E308A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
              </button>

              {showNotification && (
                <button type="button" className="relative ml-2 p-1" onClick={handleNotification}>
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <NotificationBell badgeCount={notifCount} />
                </button>
              )}

              <button type="button" className={`relative p-1 ${!showNotification ? 'ml-2' : ''}`} onClick={() => {
                if (baseUrl) {
                  localStorage.clear()
                  window.location.href = baseUrl
                } else {
                  handleLogout()
                }
              }}>
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View Lobby</span>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_4092_6565)">
                    <path d="M12 3V10H2V3H12ZM2 1C0.896875 1 0 1.89688 0 3V10C0 11.1031 0.896875 12 2 12H5.66563L5.33125 13H3C2.44688 13 2 13.4469 2 14C2 14.5531 2.44688 15 3 15H11C11.5531 15 12 14.5531 12 14C12 13.4469 11.5531 13 11 13H8.66562L8.33125 12H12C13.1031 12 14 11.1031 14 10V3C14 1.89688 13.1031 1 12 1H2ZM16.5 1C15.6719 1 15 1.67188 15 2.5V13.5C15 14.3281 15.6719 15 16.5 15H18.5C19.3281 15 20 14.3281 20 13.5V2.5C20 1.67188 19.3281 1 18.5 1H16.5ZM17 3H18C18.275 3 18.5 3.225 18.5 3.5C18.5 3.775 18.275 4 18 4H17C16.725 4 16.5 3.775 16.5 3.5C16.5 3.225 16.725 3 17 3ZM16.5 5.5C16.5 5.225 16.725 5 17 5H18C18.275 5 18.5 5.225 18.5 5.5C18.5 5.775 18.275 6 18 6H17C16.725 6 16.5 5.775 16.5 5.5ZM17.5 10.5C17.7652 10.5 18.0196 10.6054 18.2071 10.7929C18.3946 10.9804 18.5 11.2348 18.5 11.5C18.5 11.7652 18.3946 12.0196 18.2071 12.2071C18.0196 12.3946 17.7652 12.5 17.5 12.5C17.2348 12.5 16.9804 12.3946 16.7929 12.2071C16.6054 12.0196 16.5 11.7652 16.5 11.5C16.5 11.2348 16.6054 10.9804 16.7929 10.7929C16.9804 10.6054 17.2348 10.5 17.5 10.5Z" fill="#2E308A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4092_6565">
                      <rect width="20" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <div className="relative ml-2 p-1 hover:cursor-pointer hover:bg-gray-50 hover:rounded-md">
                <div>
                  <button
                    type="button"
                    className="relative flex text-sm font-medium text-indigo-800"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={this.toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <p className='flex items-center'>{role}</p>
                    <div className="w-8 h-">
                      <svg
                        className="ml-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className={`absolute right-0 z-10 mt-2 w-64 border border-gray-200 transition-all duration-300 ease-in-out origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                  onClick={this.closeDropdown}
                >
                  {/* <a href="#" className="block px-4 py-2 text-sm hover:bg-indigo-800 hover:text-white text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-indigo-800 hover:text-white text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a> */}
                  <span className="block px-4 py-2 text-sm text-gray-700"> USER <strong> {userName} </strong></span>
                  <a href="#" onClick={handleLogout} className="block px-4 py-2 text-sm hover:bg-indigo-800 hover:text-white text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
