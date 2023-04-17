import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      author: "",
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentChange(event) {
    this.setState({ commentText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.commentText);
    this.setState({ commentText: "", author: "" });
  }

  render() {
    const { onClose } = this.props;
    const { commentText, author } = this.state;

    return (
      <div>
        <div className="modal-overlay" onClick={onClose}></div>
        <div className="modal-content">
          <h2 className="h2-comment">Add Comment</h2>
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="comment-input"
              value={commentText}
              onChange={this.handleCommentChange}
              placeholder="Type your comment here..."
            />
            <td>{author}</td>
            <div className="buttons">
              <button className="modal-submit" type="submit">
                Submit
              </button>
              <button className="modal-cancel" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Comment;
/* This is a React component named Comment which renders a modal for adding comments.

The component has a constructor which initializes the state of the component with commentText and author properties.

The handleCommentChange method is a callback function that updates the commentText state whenever the textarea value changes.

The handleSubmit method is another callback function that prevents the default form submission behavior, calls the onSubmit function passed down from the parent component with the current commentText state as an argument, and resets the commentText and author state values to an empty string.

In the render method, the show and onClose props are destructured from the parent component, and the commentText and author state values are destructured from the component state.

The return statement contains the HTML and JSX that will be rendered to the DOM. The modal is conditionally displayed based on the show prop value. The onClose function is bound to the onClick event of the overlay div, and the handleSubmit method is bound to the form's onSubmit event. The textarea has an onChange event that is bound to the handleCommentChange method.

Lastly, there are two buttons, "Submit" and "Cancel", which are bound to their respective event handlers. */
