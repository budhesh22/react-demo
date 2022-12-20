import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseState from "./UseState";

const HooksDemoList = ({ hook }) => {
  return (
    <div className="hooks-list">
      {hook === "useState" && <UseState />}
      {hook === "useEffect" && <UseEffect />}
      {hook === "useRef" && <UseRef />}
      {hook === "Default" && ""}
    </div>
  );
};

export default HooksDemoList;
