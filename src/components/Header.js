import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import TypeWriter from 'react-typewriter'

function makeHeader(path) {

}

function Header({ makeFooterVisible, contentActive, path }) {
  const title = (
    <h1 className="Header__title">
      {contentActive ? 'Projects' : 'Hello, I\'m Joe. How are you?'}
    </h1>
  );

  return (
    <header className={classNames({
      'Header': true,
      'Header--content-active': contentActive
    })}>
      <span className="Header__gradient" />
      <div className="container">
        <Link to="/">
          <img className="Header__img" src="http://placekitten.com/200/200" />
        </Link>
        { // Typed text only on home page
          contentActive
            ? title
            : <TypeWriter typing={1} onTypingEnd={makeFooterVisible}>
              {title}
            </TypeWriter>
        }
      </div>
    </header>
  );
}

export default Header;
