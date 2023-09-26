import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import {auth} from '../firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

    import "firebase/auth";const MainHeader = (props) => {
  const navigate=useNavigate();
  let user = auth.currentUser;
  console.log(user);
  const handleLogout=(e)=>{
    signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
          window.alert("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }
  return (
    <header className={classes.header}>
      <h1>ध्वनि</h1>
      <div>
        <nav>
        {user && <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <button>होम</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Speech-To-Text"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <button>बोलें</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/question"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <button>फ़ार्म</button>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <button onClick={handleLogout}>लॉग आउट</button>
              </NavLink>
            </li>
            
          </ul>}
          {!user && <ul>
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <button>लॉगिन</button>
              </NavLink>
            </li>
            </ul>}
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
