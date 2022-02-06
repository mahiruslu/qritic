import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment.jsx";

function User(props) {
  const [posts, setPosts] = React.useState([]);
  const getPosts = () => {
    // if (posts.length > 0) {
    //   setPosts([]);
    // } else {
    //   axios
    //     .get(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${props.user.id}`
    //     )
    //     .then((res) => {
    //       setPosts([]);
    //       setPosts(res.data);
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <Link
      to={`/user/posts/${props.user.id}`}
      className="p-1 mb-5 max-w-full w-full md:w-1/3 md:m-5 md:items-center md:justify-center mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center m-5 cursor-pointer"
      onClick={getPosts}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="shrink-0 float-left">
          <img
            className="h-16 w-16 rounded-full border border-gray-100 shadow-sm object-cover"
            src={
              props.user.id % 5 === 0
                ? `../img/empty.png`
                : `../img/${props.user.id % 5}.jpg`
            }
            alt="Mahir"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center content-center pl-5">
          <div className="text-xl font-medium text-black flex flex-col">
            <div className="flex">
              <p className="text-sm justify-center items-center">
                {props.user.name}{" "}
              </p>
              <p className="text-gray-300 text-sm pl-2">
                {" "}
                @{props.user.username}
              </p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-500">{props.user.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {posts.length === 0
          ? null
          : posts.map((post) => {
              return <Comment key={post.id} data={post} />;
            })}
      </div>
    </Link>
  );
}

export default User;
