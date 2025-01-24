import React, { Component } from 'react';  
  
interface ContentProps {  
  children: React.ReactNode;
}  
  
class Content extends Component<ContentProps> {  

  handleScroll = (event: React.UIEvent<HTMLDivElement>) => {  
    const scrollY = event.currentTarget.scrollTop; // Dapatkan scrollY 
  };  

  render() {  
    const { children } = this.props;  
    return (  
      <main className="pl-2 pt-1.5 h-screen">  
        {children}  
      </main>  
    );  
  }  
}  
  
export default Content;  
