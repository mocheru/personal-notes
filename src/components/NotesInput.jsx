import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state = {
      title: "",
      body: "",
      titleChar: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (this.state.titleChar > 0) {
      this.setState((s) => {
        return {
          title: event.target.value,
          titleChar: s.titleChar - 1,
        };
      });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        titleChar: 50,
      };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Make Your Notes</h2>
        <p className="note-input__title__char-limit">
          Remaining Character Limits: {this.state.titleChar}
        </p>
        <input
          type="text"
          placeholder="Enter Your Title ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <input
          className="note-input__body"
          type="text"
          placeholder="Enter Your Notes ..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NotesInput;
