import React from 'react';
import Header from './PureHeader';
import Footer from './PureFooter';
import '../styles/custom.scss';


export default ({children,hideLayout}) => <div>
    {hideLayout || <Header/>}{children}{hideLayout || <Footer/>}
  </div>