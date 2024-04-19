import { Link, NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slise";
import { logoutThunk } from "../../redux/auth/operation";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.header}>
      <Link to="/">React</Link>
      <p>{user.name}</p>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
