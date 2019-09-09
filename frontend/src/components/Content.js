import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      displayEditForm: false
    };
  }

  editButtonClick = () => {
    this.setState({
      displayEditForm: true
    });
  };

  cancelEdit = () => {
    this.setState({
      displayEditForm: false
    });
  };

  renderContent = () => {
    if (this.props.displayContent) {
      if (this.state.displayEditForm) {
        return (
          <NoteEditor
            note={this.props.note}
            saveChange={this.props.saveChange}
            cancelEdit={this.cancelEdit}
          />
        );
      } else {
        return (
          <NoteViewer
            note={this.props.note}
            // Pass it
            editButtonClick={this.editButtonClick}
          />
        );
      }
    } else {
      return <Instructions />;
    }
  };

  render() {
    // console.log(this.props);
    return (
      <div className="master-detail-element detail">{this.renderContent()}</div>
    );
  }
}

export default Content;
