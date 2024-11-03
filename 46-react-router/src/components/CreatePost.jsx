import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div className="bd-example m-0 border-0">
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your UserId here
          </label>
          <input
            placeholder="Your User Id"
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            placeholder="How are you feeling today..."
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Content
          </label>
          <textarea
            placeholder="Tell us more about it"
            rows="4"
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Number of Reactions
          </label>
          <input
            placeholder="How many people reacted to this post"
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your hashtags here
          </label>
          <input
            placeholder="Enter your tags using sapce"
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
