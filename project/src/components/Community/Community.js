import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Community.css";
import Comment from "./Comment";
export default class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      newTopicTitle: "",
      newTopicDescription: "",
      showCommentModal: true, // Modal açık mı kapalı mı?
      currentTopicIndex: null, // Hangi konuya yorum yapıldı?
    };
    // Bind event handlers
    this.handleNewTopicTitleChange = this.handleNewTopicTitleChange.bind(this);
    this.handleNewTopicDescriptionChange =
      this.handleNewTopicDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenCommentModal = this.handleOpenCommentModal.bind(this);
    this.handleCloseCommentModal = this.handleCloseCommentModal.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  /*the componentDidMount() method is added after the constructor() method and before the other event handler methods.
 This method fetches comments from an external API and sets the topics state with the retrieved data. 
 Note that the async keyword is used to mark the method as asynchronous, and the await keyword is used to wait for the API response and the JSON data. 
Any errors that occur during the API call are caught in a try...catch block and logged to the console. */
  async componentDidMount() {
    try {
      const response = await fetch("https://localhost:3000/comments");
      const comments = await response.json();
      this.setState({ topics: comments });
    } catch (error) {
      console.error(error);
    }
  }

  // Event handlers
  handleNewTopicTitleChange(event) {
    this.setState({ newTopicTitle: event.target.value });
  }

  handleNewTopicDescriptionChange(event) {
    this.setState({ newTopicDescription: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { newTopicTitle, newTopicDescription } = this.state;
    const newTopic = {
      title: newTopicTitle,
      description: newTopicDescription,
      comments: [],
    };
    this.setState({
      topics: [...this.state.topics, newTopic],
      newTopicTitle: "",
      newTopicDescription: "",
    });
  }

  handleOpenCommentModal(topicIndex) {
    this.setState({ showCommentModal: true, currentTopicIndex: topicIndex });
  }

  handleCloseCommentModal() {
    this.setState({ showCommentModal: false, currentTopicIndex: null });
  }

  handleCommentSubmit(commentText) {
    const { currentTopicIndex } = this.state;
    const updatedTopics = [...this.state.topics];
    updatedTopics[currentTopicIndex].comments.push({
      text: commentText,
      author: "", // replace with actual user name
    });
    this.setState({ topics: updatedTopics, showCommentModal: false });
  }

  render() {
    const { topics, newTopicTitle, newTopicDescription } = this.state;
    const { showCommentModal, currentTopicIndex } = this.state;
    return (
      <section>
        <div className="logout">
          <NavLink to="/">LogOut</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/studentconnect/profile" data-toggle="tab">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/education" data-toggle="tab">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/workexperience" data-toggle="tab">
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/community" data-toggle="tab">
                Community
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="community">
          <h2 className="head-com"> Community</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="label-com">New Topic Title:</label>
              <input
                type="text"
                className="form-control"
                id="topicTitle"
                value={newTopicTitle}
                onChange={this.handleNewTopicTitleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>New Topic Description:</label>
              <textarea
                className="form-control"
                id="topicDescription"
                value={newTopicDescription}
                onChange={this.handleNewTopicDescriptionChange}
                required
              />
            </div>
            <button type="submit" className="addtpc-com">
              Add Topic
            </button>
          </form>
          <hr />
          <h2 className="h2-com">Current Topics:</h2>
          <table className="table-com">
            <thead className="thead-com">
              <tr>
                <th>SNO</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created By</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody className="body-com">
              {topics.map((topic, topicIndex) => (
                <React.Fragment key={topicIndex}>
                  <tr id="tr-com">
                    <td id="td-com">{topic.sno}</td>
                    <td>{topic.title}</td>
                    <td>{topic.description}</td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => this.handleOpenCommentModal(topicIndex)}
                      >
                        View Comments ({topic.comments.length})
                      </button>
                    </td>
                  </tr>
                  {showCommentModal && currentTopicIndex === topicIndex && (
                    <Comment
                      onClose={this.handleCloseCommentModal}
                      onSubmit={this.handleCommentSubmit}
                    />
                  )}
                  {topic.comments.map((comment, commentIndex) => (
                    <tr key={commentIndex + 1}>
                      <td></td>
                      <td>{comment.text}</td>
                      <td>{comment.author}</td>
                      <td></td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
/* Bu şekilde kodu güncelledim. Yapmamız gereken değişiklikleri şöyle özetleyebilirim:

- `React.Fragment` ekleyerek tablonun içindeki birden fazla elemanı tek bir `map` fonksiyonu kullanarak döndürdük.
- Yorum ekleme işlevselliğini de ekledik. Yeni yorumlar, `topics` dizisindeki doğru konu dizisine eklenir. Bu işlem, yorum ekleme formunu `onSubmit` olayına bağladığımız bir işlevle yapılır.

Şimdi kodu tekrar deneyebilirsiniz. Artık yeni konular ekleyebilir ve mevcut konulara yorum ekleyebilirsiniz. Her iki işlem de, bileşenin dahili durumunu güncelleyerek gerçekleştirilir.
 */
