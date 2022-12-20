import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/components/demoList.scss";

const DemoList = () => {
  const navigate = useNavigate();
  return (
    <div className="main-demo">
      <button className="btn-demo" onClick={() => navigate("/demo/hooks")}>
        Hooks Demo
      </button>
      <button className="btn-demo" onClick={() => navigate("/demo/life-cycle")}>
        LifeCycle Demo
      </button>
    </div>
  );
};

export default DemoList;
