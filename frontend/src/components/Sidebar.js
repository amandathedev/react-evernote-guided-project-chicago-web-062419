import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="master-detail-element sidebar">
        {/* {this.state.notes.map(note => {})} */}
        <NoteList />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
