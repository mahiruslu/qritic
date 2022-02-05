import React from "react";
import Posts from "../Components/Posts.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";

function Explore() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const params = useParams();
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    console.log(
      `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
    );
    console.log(posts);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <Posts key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;
