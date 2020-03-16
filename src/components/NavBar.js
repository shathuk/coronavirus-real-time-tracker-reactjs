import React from 'react';

function NavBar() {
  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className='container'>
        <div className='nav-wrapper'>
          <a href='/' className='brand-logo'>
            Covid - 19
          </a>

          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
