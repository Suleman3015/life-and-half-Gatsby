import React from 'react'
import { Link } from "gatsby"
import '../../styles/nav/nav.css'
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {

    return (
        <div className="Navbar" >
            <div className="logo" >
                <h1>Life And Half</h1>
            </div>
            <div className="menu" >
                <ul>
                    <Link> Customer Stories </Link>
                    <Link> About Us</Link>

                </ul>
                <div className="butDiv">
                    <button className="but" >GET STARTED</button>



                </div>
                <div className="menuIcon" >
                    <MenuIcon />
                </div>
            </div>


        </div>


    )
}

export default Navbar