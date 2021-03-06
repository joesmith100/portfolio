import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// FIXME: Generate a different Nav on tablet + sized to go inside the container and make the picutre clickable: TODO: remove home, add contact links

function Nav({ navVisible, toggleNav, path }) {
  return (
    <nav className={classNames({
      Nav: true,
      'Nav--visible': navVisible,
    })}>
      <div className="container">
        <section className='Nav__links'>
          {[['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About']].map(link => (
            <Link
              key={link[0]}
              onClick={navVisible ? toggleNav : f => f}
              to={link[0]}
              className={classNames({
                'Nav__links__link': true,
                'Nav__links__link--active': new RegExp(
                  link[0] === '/'
                  ? '^\\' + link[0] + "$"
                  : '^\\' + link[0]
                ).test(path)
              })}
            >
              {link[1]}
            </Link>
          ))}
        </section>
      </div>
    </nav>
  )
}

export default Nav
