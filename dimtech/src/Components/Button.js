import React from 'react';
import "../style/Button.css"


function Button(props) {
  return (
    <div className="ButtonLearn">
      <button className="button">
        {props.label}
      </button>
    </div>
  );
}

export default Button