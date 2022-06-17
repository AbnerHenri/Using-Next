import React from 'react';

import Style from '../styles/Components/NavBar.module.css'

function NavBar() {
  return(
    <div className={Style.NavBar}>
        <h2>Rick and Morty API</h2>
    </div>
  );
}

export default NavBar;