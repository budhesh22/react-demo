import React, { useState } from "react";
import "../../assets/scss/components/useState.scss";

const UseState = () => {
  const [count, setCount] = useState(0);

  if (count < 0) {
    alert("Minus counter Is Not Allowed !!");
    setCount(0);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="use-state-demo-sec">
            <div className="use-state-info">
              <p className="demo-title"> ** UseState Demo **</p>
              <p className="counter-value">Count Value {count}</p>
            </div>
            <div className="counter-btn">
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-demo-plus"
              >
                Counter +
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="btn btn-demo-minus"
              >
                Counter -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseState;
