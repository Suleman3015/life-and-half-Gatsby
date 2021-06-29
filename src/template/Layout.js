import React from 'react'
import Navbar from '../components/nav/navbar'


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />

            {/* insert Navbar here bro */}
            {children}
            {/* insert Footer here bro */}
        </div>
    )
}

export default Layout
