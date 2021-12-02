import React, {useContext} from 'react'
import {Route,Switch } from 'react-router-dom'
import Users from '../pages/Users'
import Devices from '../pages/Devices'
import Posts from '../pages/Posts'
import LogIn from '../pages/LogIn'
import AuthContext from './context'
import { Redirect } from 'react-router'

const  AppRoutes = ()  => {
    const {isAuth} = useContext(AuthContext);
    return(
    
        isAuth
        ?
    
    
        <Switch>
            <Route path = '/users' component={Users}/>
            <Route path = '/devices' component={Devices}/>
            <Route path = '/posts' component={Posts}/>
            <Redirect to = '/users'/>
            </Switch>
            :
            <Switch>
         
         
            <Route path = '/login' component={LogIn}/>
            <Redirect to = '/login'/>
            </Switch>
    )
}

export default AppRoutes
