import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

// const usersUrl = "http://localhost:3000/api/v1/users";
const notesUrl = "http://localhost:3000/api/v1/notes/";
// const categoriesUrl = "http://localhost:3000/api/v1/categories";

class NoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      // users: [],
      notes: [],
      displayContent: false,
      selectedNote: {},
      filter: ""
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
    // console.log(selectedNote);
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
      .then(note => this.setEditedNote(note));
  };

  setEditedNote = selectedNote => {
    // Iterate through the notes array. Replace the one with the matching ID
    let newNotesArray = this.state.notes.map(note =>
      note.id === selectedNote.id ? selectedNote : note
    );
    // if (note.id === selectedNote.id) {
    //   // this.setState({ note: selectedNote });
    //   return selectedNote;
    // } else {
    //   return note;
    // }

    this.setState({
      displayContent: true,
      // Set state to the updated array with the edited note
      notes: newNotesArray,
      selectedNote: selectedNote
    });
  };

  // newNote = () => {
  //   console.log("new note");
  // };

  newNote = () => {
    console.log("note saved");
    // POST fetch with default content
    let newNote = {
      title: "New note",
      body: "Add your content here."
    };
    fetch(notesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    })
      .then(resp => resp.json())
      .then(newNote => {
        this.setState(prevState => {
          // Add to the array
          return { notes: [...prevState.notes, newNote] };
        });
      })
      .catch(alert);
  };

  onSearchChange = event => {
    // Controlled form
    this.setState({ filter: event.target.value });
  };

  filteredNotes = () => {
    // Go into this.state.notes (array) and filter for the note whose title includes the string this.state.filter

    return this.state.notes.filter(
      note =>
        note.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteNote = selectedNote => {
    fetch(notesUrl + this.state.selectedNote.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(note => this.setDeletedNote(note));
  };

  // TODO
  setDeletedNote = selectedNote => {
    console.log("got here");
    // let shorterArray = [...this.state.notes]
    let shorterArray = this.state.notes.filter(
      note => note.id !== selectedNote.noteId
    );
    // console.log(selectedNote);
    // console.log(shorterArray);
    this.setState({
      notes: shorterArray,
      displayContent: false
    });
  };

  render() {
    return (
      <Fragment>
        <Search onSearchChange={this.onSearchChange} />
        <div className="container">
          {/* Pass the notes array as a prop to child components */}
          <Sidebar
            // If there is something in the filter state field, show filtered notes. Otherwise show the whole array
            notes={this.state.filter ? this.filteredNotes() : this.state.notes}
            handleNoteClick={this.handleNoteClick}
            newNote={this.newNote}
          />
          <Content
            note={this.state.selectedNote}
            key={this.state.selectedNote.id}
            displayContent={this.state.displayContent}
            saveChange={this.saveChange}
            deleteNote={this.deleteNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
