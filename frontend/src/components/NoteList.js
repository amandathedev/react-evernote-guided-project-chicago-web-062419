import React from "react";
import NoteItem from "./NoteItem";

// Function component
const NoteList = props => {
  // props, not this.props
  return (
    <ul>
      {/* Pass the props */}
      <NoteItem
        note={props.note}
        // Keep passing
        handleNoteClick={props.handleNoteClick}
        // truncatedText={truncateText(props.note.body)}
      />
    </ul>
  );
};

export default NoteList;
