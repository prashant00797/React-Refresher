//for understanding class base components
import React from "react";
import { GITHUB_USER } from "./utils";

class Classy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //if we are not using state variable dont decalre constructor as js will automatically do it for us
      count: 0,
      count2: 2,
      userData: {},
    };
    console.log("--->3 child constructor called");
  }

  async componentDidMount() {
    console.log(
      "--->5.child mounted successfully hence  childs componentDidMount or useEffect called",
    );
    const data = await (await fetch(GITHUB_USER)).json();
    this.setState({
      userData: data,
    });
  }

  componentDidUpdate() {
    console.log("--->7. component updated successfully after updation");
  }

  componentWillUnmount() {
    console.log(
      "-->8 it will unmounted when this page is unmounted that is if we go to a different route",
    );
  }

  render() {
    console.log("---->4.child render called");

    // const { name, arr } = this.props; destructuring before is better
    return (
      <div>
        <h1>Classy </h1>
        <p>{this.props.name}</p>
        <p>{this.props.arr.join(",")}</p>
        <h6>{this.state.count}</h6>
        <p>{JSON.stringify(this.state.userData)}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click
        </button>
      </div>
    );
  }
}

export default Classy;
