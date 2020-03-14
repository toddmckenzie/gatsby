import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children} //Need this to display info in the middle of navbar and footer.
            <Footer />
        </>
    )
}

export default Layout;