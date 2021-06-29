import React from 'react'
import Navbar from '../components/nav/navbar'
const Layout = ({ children }) => {
    return (
        <div>
            {/* insert Navbar here bro */}
            <Navbar />
            {children}
            {/* insert Footer here bro */}
        </div>
    )
}

export default Layout
