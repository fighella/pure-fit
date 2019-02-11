import React from 'react';
import Header from './PureHeader';
import Footer from './PureFooter';
import '../styles/custom.scss';


export default ({children}) => <div>
    <Header/>{children}<Footer/>
  </div>