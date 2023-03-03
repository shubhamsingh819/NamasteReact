import { useState } from "react";

const logedInUser = () => {
  // Api call to check authentication
  return false;
};

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        isLogedIn?  <button onClick={() => setIsLogedIn(false)}>LogOut</button>: <button onClick={() => setIsLogedIn(true)}>LogedIn</button>
      }
     
     
    </div>
  );
};

export default Header;
