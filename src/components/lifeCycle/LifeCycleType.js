import React from "react";

const LifeCycleType = () => {
  return (
    <>
      <div className="life-cycle-info mt-4">
        <h4>Life Cycle</h4>
        <p>
          <b>The three phases of Lifecycle</b>
        </p>
      </div>
      <div className="col-md-4">
        <ul>
          <li>1 - Mounting</li>
          <ul>
            <li>constructor</li>
            <li>getDerivedStateFromProps</li>
            <li>componentDidMount</li>
            <li>render</li>
          </ul>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <li>2 - Updating</li>
          <ul>
            <li>getDerivedStateFromProps</li>
            <li>shouldComponentUpdate</li>
            <li>render</li>
            <li>getSnapshotBeforeUpdate()</li>
            <li>componentDidUpdate</li>
          </ul>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <li>3 - Unmounting</li>
          <ul>
            <li>componentWillUnmount</li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default LifeCycleType;
