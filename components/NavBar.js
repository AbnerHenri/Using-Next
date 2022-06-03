import React from 'react';

import Style from '../styles/Components/NavBar.module.css'

function NavBar() {
  return(
    <div className={Style.NavBar}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
    </div>
  );
}

export default NavBar;