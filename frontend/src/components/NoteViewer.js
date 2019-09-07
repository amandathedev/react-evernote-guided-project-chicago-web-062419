import React, { Fragment } from "react";

// Props, not this.props
const NoteViewer = props => {
  // console.log(props.note);
  // Destructure
  const { title, body } = props.note;
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{body} </p>
      {/* Call it */}
      <button onClick={props.editButtonClick}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
