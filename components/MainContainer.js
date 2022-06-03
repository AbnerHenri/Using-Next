import React from 'react';

import NavBar from './NavBar'
import Footer from './Footer';

function MainContainer({ children }) {
  return(
    <>
        <NavBar />
        <div style={{ height : '60vh' }}>{children}</div>
        <Footer />
    </>
  );
}

export default MainContainer;