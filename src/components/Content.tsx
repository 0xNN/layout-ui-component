import React from 'react';  
  
interface ContentProps {  
  children: React.ReactNode;  
}  
  
const Content: React.FC<ContentProps> = ({ children }) => {  
  return (  
    <main className="pl-2 pt-1.5 h-screen">  
      {children}  
    </main>  
  );  
};  
  
export default Content;  
