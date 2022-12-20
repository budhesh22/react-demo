import React, { Component } from "react";

export default class ComponentWillUnmount extends Component {
  componentWillUnmount() {
    alert("componentWillUnmount");
  }
  render() {
    return <div>ComponentWillUnmount</div>;
  }
}
