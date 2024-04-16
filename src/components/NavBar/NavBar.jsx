import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav id="mySidenav" className="navbar">
      <div className="logo">
        🔍🐛 
      &nbsp;&nbsp;
      Grub Finder
      </div>
      <p>Welcome, {user.username}</p>
      
        <Link to="/orders" id="orderhistory">
          Order History
        </Link>
        <Link to="/orders/new" id="neworder">
          New Order
        </Link>
        <Link to="/restaurants" id="restaurants">Restaurants</Link>
        {user.role === 'vendor' && <Link to="/settings" id="settings">Settings</Link>}
        {/* welcome user */}
        <div className="dropdown">
        <button className="dropbtn">Welcome, {user.username}</button>
        <div className="dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
      </nav>
      <div className="header">

      </div>
    
    </>
  );
}
