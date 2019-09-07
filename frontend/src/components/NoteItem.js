import React from "react";

const NoteItem = props => {
  // console.log(props.note);
  // let truncatedText = props.truncateText(props.note.body)
  return (
    <div onClick={props.handleNoteClick}>
      <h2>{props.note.title}</h2>
      <p>{props.note.body.slice(0, 45)}...</p>
    </div>
  );
};

export default NoteItem;
