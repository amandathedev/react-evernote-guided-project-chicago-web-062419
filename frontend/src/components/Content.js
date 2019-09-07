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

  // Do it
  editButtonClick = () => {
    console.log("got here");
    this.setState({
      displayEditForm: true
    });
  };

  renderContent = () => {
    if (this.props.displayContent) {
      return (
        <NoteViewer
          note={this.props.note}
          // Pass it
          editButtonClick={this.editButtonClick}
        />
      );
    } else if (this.state.displayEditForm) {
      return <NoteEditor note={this.props.note} />;
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
