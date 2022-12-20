import { useState } from "react";
import "../../assets/scss/components/hooksMain.scss";
import HooksDemoList from "../hooks/HooksDemoList";
import HookRules from "../hooks/HookRules";
import HookSelect from "../hooks/HookSelect";


const HooksMain = () => {
  const [hook, setHook] = useState("Default");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HookRules />
        </div>
        <div className="col-md-4">
          <div className="hook-sec">
            <HookSelect setHook={setHook} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="hook-demo">
            <HooksDemoList hook={hook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksMain;
