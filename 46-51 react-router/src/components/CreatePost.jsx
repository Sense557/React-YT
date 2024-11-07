import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <div className="bd-example m-0 border-0">
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter your UserId here
          </label>
          <input
            placeholder="Your User Id"
            type="text"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            className="form-control"
            id="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
