import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

// const usersUrl = "http://localhost:3000/api/v1/users";
const notesUrl = "http://localhost:3000/api/v1/notes/";

class NoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      // users: [],
      notes: [],
      displayContent: false,
      selectedNote: {}
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    fetch(notesUrl)
      .then(resp => resp.json())
      .then(notes => {
        this.setState({
          // Add the fetched data to the array in state
          notes: notes
        });
      })
      .catch(alert);
    // Can't console.log here and see the array of notes because it's asynchronous
  };

  // Pass this function all the way down the chain
  handleNoteClick = (event, note) => {
    // console.log("got here");
    this.setState({
      displayContent: !this.state.displayContent,
      selectedNote: note
    });
    // console.log(this.state.displayContent);
  };

  saveChange = selectedNote => {
    // console.log(notesUrl + "/" + this.state.selectedNote.id);
    fetch(notesUrl + this.state.selectedNote.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: selectedNote.title,
        body: selectedNote.body
      })
    })
      .then(resp => resp.json())
      .then(note => this.setEditedNote(note));
  };

  setEditedNote = selectedNote => {
    // Iterate through the notes array. Replace the one with the matching ID
    console.log(selectedNote.id);
    this.state.notes.map(note => {
      console.log(note.id);
      if (note.id === selectedNote.id) {
        return (note = selectedNote);
      } else {
        return note;
      }
    });
    // console.log(selectedNote);
  };

  render() {
    // console.log(this.state.notes);
    return (
      <Fragment>
        <Search />
        <div className="container">
          {/* Conditionally render the content */}
          {/* {this.state.displayContent ? (
            <Content note={this.state.notes} />
          ) : null} */}
          {/* Pass the notes array as a prop to child components */}
          <Sidebar
            notes={this.state.notes}
            // Pass function
            handleNoteClick={this.handleNoteClick}
          />
          <Content
            note={this.state.selectedNote}
            key={this.state.selectedNote.id}
            displayContent={this.state.displayContent}
            saveChange={this.saveChange}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
