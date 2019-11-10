import React, { Component } from "react";

class NoteEditor extends Component {
  // Don't forget to pass in props
  constructor(props) {
    super(props);
    this.state = {
      titleInput: this.props.note.title,
      bodyInput: this.props.note.body
    };
  }

  // TODO destructure
  // const { title, body } = this.props.note;

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({
      // set equal to state to be able to edit
      [event.target.name]: event.target.value
    });
  };

  saveChange = event => {
    event.preventDefault();
    // Pass to function in NoteContainer (through Content)
    this.props.saveChange(this.state);
    this.props.cancelEdit();
  };

  render() {
    return (
      <form className="note-editor">
        {/* <h1>hello i am the form</h1> */}
        <input
          type="text"
          name="titleInput"
          value={this.state.titleInput}
          onChange={this.handleChange}
        />
        <textarea
          name="bodyInput"
          value={this.state.bodyInput}
          onChange={this.handleChange}
        />
        <div className="button-row">
          <input
            className="button"
            type="submit"
            value="Save"
            onClick={event => this.saveChange(event)}
          />
          {/* On click, close the form (Content has state) */}
          <button type="button" onClick={this.props.cancelEdit} value="cancel">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
