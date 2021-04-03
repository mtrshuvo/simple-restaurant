import React from "react"
import {Navbar, NavbarBrand} from 'reactstrap'

const Navigation = ()=>{
    return(
        <Navbar dark color="dark" >
            <div className="container">
                <NavbarBrand href="/">Restaurant</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default Navigation