import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1, { Component } from 'react';

interface NavbarState {
    isDropdownOpen: boolean;
    isFullscreen: boolean;
}
interface NavbarProps {
    bgColor?: string;
    color?: string;
    projectName?: React$1.ReactNode;
    logo?: React$1.ReactNode;
    logoCollapsed?: React$1.ReactNode;
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
declare class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps);
    toggleDropdown: () => void;
    closeDropdown: () => void;
    toggleFullscreen: () => void;
    handleFullscreenChange: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): react_jsx_runtime.JSX.Element;
}

interface MenuItem {
    label: string;
    path: string;
    icon?: React.ReactNode;
    iconOpen?: React.ReactNode;
    iconClose?: React.ReactNode;
    subItems?: MenuItem[];
}

interface SidebarProps {
    title?: React$1.ReactNode;
    showSearch?: boolean;
    menuItems?: MenuItem[];
    bgColor?: string;
    color?: string;
    isCollapsed: boolean;
    activePath?: string;
    logoCollapsed?: React$1.ReactNode;
    logo?: React$1.ReactNode;
    onMenuItemClick?: (path: string) => void;
}
interface SidebarState {
    expandedItems: {
        [key: string]: boolean;
    };
    isHovered: boolean;
}
declare class Sidebar extends Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps);
    toggleExpand: (path: string) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): react_jsx_runtime.JSX.Element;
}

interface ContentProps {
    children: React$1.ReactNode;
}
declare class Content extends Component<ContentProps> {
    handleScroll: (event: React$1.UIEvent<HTMLDivElement>) => void;
    render(): react_jsx_runtime.JSX.Element;
}

interface FooterProps {
    bgColor?: string;
    color?: string;
}
declare const Footer: React$1.FC<FooterProps>;

interface LayoutProps {
    children: React$1.ReactNode;
    title: React$1.ReactNode;
    menuItems?: MenuItem[];
    showSearch?: boolean;
    showSidebar?: boolean;
    bgColor?: string;
    color?: string;
    projectName?: string;
    logo?: React$1.ReactNode;
    activePath: string;
    logoCollapsed?: React$1.ReactNode;
    notifCount?: number;
    role?: string;
    userName?: string;
    baseUrl?: string;
    showNotification?: boolean;
    onMenuItemClick: (path: string) => void;
    handleLogout: () => void;
    handleNotification: () => void;
}
interface LayoutState {
    isSidebarCollapsed: boolean;
    scrollY: number;
}
declare class Layout extends Component<LayoutProps, LayoutState> {
    constructor(props: LayoutProps);
    handleScroll: (event: React$1.UIEvent<HTMLDivElement>) => void;
    toggleSidebar: () => void;
    render(): react_jsx_runtime.JSX.Element;
}

export { Content, Footer, Layout, Navbar, Sidebar };
