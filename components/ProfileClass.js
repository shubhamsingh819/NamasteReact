import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };
    console.log("child- constructor");
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/shubhamsingh819");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });

    // this is best place to make api calls
    console.log("child - componed did mount this will be called after render");

    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
     clearInterval(this.timer)
    console.log("component will unmount");
  }

  render() {
    console.log("child - render");
    return (
      <div>
        <h1>Profile class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
