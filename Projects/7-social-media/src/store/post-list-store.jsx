import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  let [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hii Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace Out.",
    reactions: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoying"],
  },

  {
    id: "2",
    title: "Pass ho gaya",
    body: "4 saal ki masti k baad bhi ho gaye hain pass. Hard to believe",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelieveable"],
  },
];

export default PostListProvider;
