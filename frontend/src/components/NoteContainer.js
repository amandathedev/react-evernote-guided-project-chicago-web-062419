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
    // If they're already the same, it will return false
    // let clickedTwice = !(this.state.selectedNote.title === note.title);
    let openNote = this.state.selectedNote.title === note.title;
    this.setState({
      // Toggle
      displayContent: openNote ? false : true,
      selectedNote: openNote ? {} : note
    });
    // console.log(this.state.displayContent);
  };

  saveChange = selectedNote => {
    // console.log(notesUrl + "/" + this.state.selectedNote.id);
    console.log(selectedNote);
    fetch(notesUrl + this.state.selectedNote.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: selectedNote.titleInput,
        body: selectedNote.bodyInput
      })
    })
      .then(resp => resp.json())
      // .then(note => console.log(note));
      .then(note => this.setEditedNote(note));
  };

  setEditedNote = selectedNote => {
    // Iterate through the notes array. Replace the one with the matching ID
    // console.log(selectedNote.id);
    this.state.notes.map(note => {
      // console.log(note.id);
      if (note.id === selectedNote.id) {
        return (note = selectedNote);
      } else {
        return note;
      }
    });
    this.setState({
      // TODO something here to make it change without refresh
      displayContent: false
    });
  };

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          {/* Pass the notes array as a prop to child components */}
          <Sidebar
            notes={this.state.notes}
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
