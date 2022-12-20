import React, { Component } from "react";
import ComponentWillUnmount from "./ComponentWillUnmount";
class MainClass extends Component {
  // 1-constructor -- > mounting method

  //the super() method in the constructor method,
  //we call the parent's constructor method and gets access to the parent's properties and methods:
  constructor(props) {
    console.log("constructor: ", props);
    super(props);
    this.state = {
      name: this.props.name,
      show: true,
    };
  }

  // Life cycle methods

  // 2-getDerivedStateFromProps -- > mounting method

  // The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
  // This is the natural place to set the state object based on the initial props.
  // It takes state as an argument, and returns an object with changes to the state.

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps:", state, props);
    return {
      //   name: props.name,
    };
  }

  // 3-componentDidMount method -- > mounting method

  // The componentDidMount() method is called after the component is rendered.

  componentDidMount() {
    console.log("before-componentDidMount", this.state.name);
    this.setState({ name: "keyboard" });
    console.log("after-componentDidMount", this.state.name);
  }

  // 4-shouldComponentUpdate -- > updating method

  //In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
  // The default value is true

  shouldComponentUpdate() {
    return true;
  }

  // 5-getSnapshotBeforeUpdate method -- > updating method

  // In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
  //  If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
  //

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate:", prevProps, prevState);
    return {};
  }

  // 6-componentDidUpdate method -- > updating method

  // The componentDidUpdate method is called after the component is updated in the DOM.

  componentDidUpdate() {
    console.log("componentDidUpdate: ", this.state.name);
  }

  // 7-componentWillUnmount method -- > unMounting method

  handleDelete = () => {
    this.setState({ show: false });
  };

  // 8-render method

  // The render() method is required, and is the method that actually outputs the HTML to the DOM.
  render() {
    console.log("render: ", this.state.name);

    let beforeUnmount;
    if (this.state.show) {
      beforeUnmount = <ComponentWillUnmount />;
    }
    return (
      <div className="class-main-state">
        <p>State Value -- {this.state.name}</p>
        {beforeUnmount}
        <button className="btn btn-dark text-light" onClick={this.handleDelete}>
          componentWillUnmount
        </button>
      </div>
    );
  }
}

export default MainClass;
