import { useRef } from "react";

const About = () => {
  // Use useRef react Method
  const isRef = useRef();

  // Click To Pass Ref In Input
  const clickHandler = () => {
    isRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>This Is A About Page !</h1>
            <input ref={isRef} className="bg-danger text-light" />
            <button
              onClick={clickHandler}
              className="btn btn-dark text-light ml-3"
            >
              UserRef
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
