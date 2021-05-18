import React from 'react'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {Redirect, Route, Switch} from 'react-router-dom'


const Body = ()=>{
    return(
            <Switch>
                <Route path='/home' component={Home}  />
                <Route path='/menu' component={Menu}  />
                <Route path='/about' component={About}  />
                <Route path='/contact' component={Contact}  />
                <Redirect from="/" to="/home" />
            </Switch>

    )
}

export default Body;