import React from "react";
import LifeCycleType from "../lifeCycle/LifeCycleType";
import MainClass from "../lifeCycle/MainClass";

const LifeCycleMain = () => {
  return (
    <div className="container">
      <div className="row">
        <LifeCycleType />
        <div className="col-md-12">
          <MainClass name="mouse" />    
        </div>
      </div>
    </div>
  );
};

export default LifeCycleMain;
