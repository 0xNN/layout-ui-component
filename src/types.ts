export interface MenuItem {  
    label: string;  
    path: string; 
    icon?: React.ReactNode;
    iconOpen?: React.ReactNode;
    iconClose?: React.ReactNode;
    subItems?: MenuItem[]
}