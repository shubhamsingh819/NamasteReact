import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionlaComponent from "./Profile";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       <p> This is Namaste React Live Course chapter 7</p>
//  <ProfileFunctionlaComponent name={"shubham"}/>
//       <Profile name={"sms"}/>
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent- constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount"); // best place to make an api calls because it's after render
  }

  render() {
    console.log("parent- render");
    return (
      <div>
        <h1>About us Page</h1>
        <p> This is Namaste React Live Course chapter 7</p>
        <ProfileFunctionlaComponent name={"shubham"} />
        <Profile name={"sms"} />
      </div>
    );
  }
}

export default About;
