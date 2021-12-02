
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from "../components/context"


  

function NavBar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li>    <a onClick = {() =>setIsAuth(false)} class = 'waves-effect waves=light btn '>Logout</a> </li>
      </ul>
    </div>
  </nav>
  );
}

export default NavBar;
