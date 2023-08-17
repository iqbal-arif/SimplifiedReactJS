import React from "react";
//My Solution
export function TodoListItem({ children, name, htmlFor, value, isComplete }) {
  return (
    <>
      <ul>
        <il>
          <input
            type="checkbox"
            checked={isComplete}
            name={name}
            value={value}
          />
          <label htmlFor={htmlFor}>{children}</label>
        </il>
      </ul>
      <label>
        <input type="checkbox" checked={isComplete} />
        {children}
      </label>
    </>
  );
}
/*
TodoListItem component
Props: children = name, isComplete : boolean
Checkbox (checked if complete)
label (children value)
*/
