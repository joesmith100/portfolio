import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { connect } from 'react-redux'

import * as actions from '../actions/actionCreators';

import Nav from './Nav';
import NavButton from './NavButton';
import Header from './Header';
import Footer from './Footer';

function App({
  children,
  location,
  navVisible,
  footerVisible,
  toggleNav,
  makeFooterVisible,
}) {
  const contentActive = !/^\/$/i.test(location.pathname);

  return (
    <div className={classNames({
      'App': true,
      'App--content-active': contentActive,
    })}>
      <Nav navVisible={navVisible} toggleNav={toggleNav} />
      <NavButton navVisible={navVisible} toggleNav={toggleNav} />
      <Header makeFooterVisible={makeFooterVisible} contentActive={contentActive}/>
      {children}
      <Footer footerVisible={footerVisible} contentActive={contentActive}/>
    </div>
  );
}

export default connect(
  ({ navVisible, footerVisible, routing }) => ({
    navVisible,
    footerVisible,
  }),
  actions
)(App)
