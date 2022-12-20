import React, { useRef, useState } from "react";
import "../../assets/scss/components/useRef.scss";

const UseRef = () => {
  // React hooks
  const ref = useRef();
  const [name, setName] = useState("");

  //   Checked the useRef event in console.log
  console.log("Checked The useRef Event : ", ref);

  //   Pass ref on onclick Event
  const handleRefPass = () => {
    ref.current.focus();
    ref.current.value = name
      ? `Your Good Name Is ${name}`
      : "Please Enter Your Good Name !";
    setTimeout(() => {
      ref.current.value = "";
      ref.current.style.backgroundColor = "";
      ref.current.style.color = "";
      setName("");
    }, 3000);
    ref.current.style.backgroundColor = "black";
    ref.current.style.color = "white";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="use-ref-info">
            <div className="input-info">
              <p className="demo-title"> ** UseRef Demo **</p>
              <input
                type="text"
                ref={ref}
                value={name}
                className="input-data"
                placeholder="Enter Your Good Name !"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="counter-btn">
              <button onClick={handleRefPass} className="btn demo-btn mt-1">
                Click To Pass ref
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
