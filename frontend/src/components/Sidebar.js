import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    // Props (array of notes) have been passed from NoteContainer
    // console.log(this.props);
    return (
      <div className="master-detail-element sidebar">
        <button>New</button>
        {/* Iterate over the notes */}
        {this.props.notes.map(note => {
          // Pass individual notes to the child component. Pass in an ID
          return (
            // Add matching id to UL
            <ul key={note.id}>
              <li>
                <NoteList
                  key={note.id}
                  note={note}
                  // Pass again
                  handleNoteClick={event =>
                    this.props.handleNoteClick(event, note)
                  }
                />
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
