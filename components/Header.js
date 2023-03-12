import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home </Link>{" "}
          </li>
          <li>
            <Link to={"/about"}> About </Link>
          </li>

          <li> <Link to={"/contact"}> Contact </Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
          <li><Link to={"/instaMart"}>InstaMart</Link></li>

        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>LogedIn</button>
      )}
    </div>
  );
};

export default Header;
