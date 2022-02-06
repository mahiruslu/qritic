import React from "react";
import Post from "../Components/Post.jsx";
import axios from "axios";

function Explore() {
  const [user, setUser] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [commentCount, setCommentCount] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        let shuffleUsers = res.data.sort(() => Math.random() - 0.5);
        setUser(shuffleUsers);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let shuffleArray = res.data.sort(() => Math.random() - 0.5);
        setPosts(shuffleArray);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <div className="flex flex-wrap">
          {posts.map((post) =>
            user.map((item) =>
              item.id === post.userId ? (
                <Post
                  key={post.id}
                  user={item}
                  post={post}
                  commentCount={commentCount}
                />
              ) : null
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Explore;
