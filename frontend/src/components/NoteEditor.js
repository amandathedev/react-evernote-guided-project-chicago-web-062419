import React, { Component } from "react";

class NoteEditor extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // TODO destructure
  // const { title, body } = this.props.note;

  handleChange = event => {
    console.log("got here");
  };

  render() {
    console.log(this.props.note);
    return (
      <form className="note-editor">
        <h1>hello i am the form</h1>
        <input
          type="text"
          name="title"
          value={this.props.note.title}
          onChange={this.handleChange}
        />
        <textarea
          name="body"
          value={this.props.note.body}
          onChange={this.handleChange}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
