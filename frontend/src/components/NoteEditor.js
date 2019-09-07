import React, { Component } from "react";

class NoteEditor extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" />
        <h1>hello</h1>
        <textarea name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
