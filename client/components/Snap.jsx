import React from "react";

function Snap(props) {

  return (
    <tr className="snaps-table elements">
      <td className="snaps-table elements title"><a href={props.url}>{props.title}</a></td>
      <td  className="snaps-table elements text">{props.snap_text}</td>
    </tr >
  );
}

export default Snap;