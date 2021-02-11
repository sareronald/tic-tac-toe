import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function DeleteBtn(props) {
  return (
    <span
      className="delete-btn nav-links"
      {...props}
      role="button"
      tabIndex="0"
    >
      ✗ Delete
    </span>
  );
}

export default DeleteBtn;
