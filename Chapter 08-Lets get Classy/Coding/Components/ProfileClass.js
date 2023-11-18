import { Component } from "react";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoInfo: [],
    };
  }
  async componentDidMount() {
    // api call to trigger the function.
    const response = await fetch("some URl");
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { repoInfo } = this.state;
    console.log(repoInfo, "repoInfo");
    return <h1>saiteja</h1>;
  }
}

export default ProfileClass;
