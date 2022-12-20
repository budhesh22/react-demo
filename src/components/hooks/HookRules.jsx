import React from "react";

const HookRules = () => {
  return (
    <div className="hooks-rules mt-4">
      <h4 className="select-hook-demo-title">
        1- Before You Select Any Hooks Please Read The Rules of Hooks
      </h4>
      <ul>
        <li>
          <h5>
            Hooks are JavaScript functions, but they impose two additional
            rules:
          </h5>
        </li>
        <li>
          <p>
            1 - Only call Hooks at the top level. Don’t call Hooks inside loops,
            conditions, or nested functions.
          </p>
        </li>
        <li>
          <p>
            2- Only call Hooks from React function components. Don’t call Hooks
            from regular JavaScript functions.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HookRules;
