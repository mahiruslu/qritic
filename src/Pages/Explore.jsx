import React from "react";
import Posts from "../Components/Posts.jsx";
import axios from "axios";

function Explore() {
  const [user, setUser] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
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
          {user.map((item) =>
            posts.map((post) =>
              item.id === post.userId ? (
                <Posts key={post.id} user={item} post={post} />
              ) : null
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Explore;
