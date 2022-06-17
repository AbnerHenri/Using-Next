import React from 'react';

import NavBar from './NavBar'

function MainContainer({ children }) {
  return(
    <>
        <NavBar />
        <div style={{ minHeight : '50vh' }}>{children}</div>
    </>
  );
}

export default MainContainer;