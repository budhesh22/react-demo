import React from "react";

const HookSelect = ({ setHook }) => {
  return (
    <div className="hook-list">
      <select
        className="select-hook"
        aria-label="Default select example"
        onChange={(e) => setHook(e.target.value)}
      >
        <option value={"Default"}>Please Select The Hook for More Info</option>
        <option value="useState">useState</option>
        <option value="useEffect">useEffect</option>
        <option value="useRef">useRef</option>
      </select>
    </div>
  );
};

export default HookSelect;
