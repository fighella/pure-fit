import React from 'react';
import Header from './PureHeader';
import Footer from './PureFooter';



const Layout = ({children,hideLayout}) => <div style={{ background: '#111'}}>
    {hideLayout || <Header/>}{children}{hideLayout || <Footer/>}
  </div>;



export default Layout;