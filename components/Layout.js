import React from 'react';
import Header from './PureHeader';
import Footer from './PureFooter';
import '../styles/custom.scss';


export default ({children,hideLayout}) => <div style={{ background: '#111'}}>
    {hideLayout || <Header/>}{children}{hideLayout || <Footer/>}
  </div>