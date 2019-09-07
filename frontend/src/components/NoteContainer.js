import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

// const usersUrl = "http://localhost:3000/api/v1/users";
const notesUrl = "http://localhost:3000/api/v1/notes";

class NoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      // users: [],
      notes: []
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

  render() {
    // console.log(this.state.notes);
    return (
      <Fragment>
        <Search />
        <div className="container">
          return <Sidebar key={note.id} note={note} />;
          {/* Pass the notes array as a prop to child components */}
          <Content notes={this.state.notes} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
