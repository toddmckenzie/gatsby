import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

//Need this to display info in the middle of navbar and footer.

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children} 
            <Footer />
        </>
    )
}

export default Layout;