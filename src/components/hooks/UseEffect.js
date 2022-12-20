import React, { useEffect, useState } from "react";
import "../../assets/scss/components/useEffect.scss";

const UseEffect = () => {
  // React hooks
  const [count, setCount] = useState(0);
  //   When the user clicked the plus/minus button then useEffect calls and also changed the document.title value.
  //   This method we use to stop the unUsable re-rendering call
  //   When we change any state value that time useEffect work and update state value
  useEffect(() => {
    document.title = `you  clicked ${count}`;
  }, [count]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="use-effect-sec">
            <div className="use-effect-demo-info">
              <p className="demo-title">** UseEffect Demo **</p>
            </div>
            <div className="counter-btn">
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-demo-plus"
              >
                Clicked and See Top Title Bar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
