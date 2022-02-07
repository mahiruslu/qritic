import React from "react";
import Post from "../components/Post.jsx";
import axios from "axios";
import Loader from "../components/Loader.jsx";

import { useParams } from "react-router-dom";

function Posts(props) {
  const [user, setUser] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const params = useParams();

  React.useEffect(() => {
    console.log(params);
    console.log(
      `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
    );
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <Post key={post.id} user={user} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
