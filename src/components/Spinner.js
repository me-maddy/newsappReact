import React from 'react';
import loading from "./spinner.gif";

export default function Spinner() {
  return (
    <div style={{textAlign : "center"}} className="my-3">
        <img src={loading} alt="Loading..." style={{width : "30px"}} />
      </div>
  )
}
