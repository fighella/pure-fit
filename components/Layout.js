import React from 'react';
import Header from './PureHeader';
import Footer from './PureFooter';

export default ({children}) => <div>
    <Header/>{children}<Footer/>
  </div>