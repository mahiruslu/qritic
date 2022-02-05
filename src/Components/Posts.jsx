import axios from "axios";
import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaComment,
  FaArrowCircleUp,
} from "react-icons/fa";
import Comment from "./Comment.jsx";

function Posts(props) {
  const [comments, setComments] = React.useState([]);
  const getComments = () => {
    if (comments.length > 0) {
      setComments([]);
    } else {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/comments?postId=${props.post.id}`
        )
        .then((res) => {
          setComments([]);
          setComments(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="p-1 mb-5 max-w-full w-2/3 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center ">
      <div className="flex flex-row w-full">
        <div className="shrink-0 float-left">
          <img
            className="h-16 w-16 rounded-full border border-gray-100 shadow-sm object-top"
            src={props.user.id % 3 !== 1 ? `../img/empty.png` : `../img/1.jpg`}
            alt="Mahir"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center content-center pl-5">
          <div className="text-xl font-medium text-black flex flex-col">
            <div className="flex">
              <p>{props.user.name} </p>
              <p className="text-gray-300 pl-2"> @{props.user.username}</p>
            </div>
            <div className="">
              <p className="text-sm text-gray-500">{props.post.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-900 pt-5 ml-2">{props.post.body}</p>
      </div>
      <div className="flex justify-between items-start w-full p-2 mt-2">
        <div className="flex justify-start items-start w-full p-2 mt-2">
          <div className="flex text-green-600 justify-start">
            <button className="text-green-600 flex">
              <FaArrowUp /> <span className="text-gray-600">12</span>
            </button>
          </div>
          <div className="ml-2 flex text-red-600">
            <button className="text-red-600 flex">
              <FaArrowDown /> <span className="text-gray-600">3</span>
            </button>
          </div>
          <button className="ml-2 text-gray-600 flex" onClick={getComments}>
            <FaComment /> <span className="text-gray-600">5</span>
          </button>
        </div>
        <div className="flex justify-end items-start w-full p-2 mt-2">
          {comments.length === 0 ? null : (
            <button className="ml-2 text-gray-600 flex" onClick={getComments}>
              <FaArrowCircleUp />
            </button>
          )}
        </div>
      </div>
      <div className="w-full">
        {comments.length === 0
          ? null
          : comments.map((comment) => {
              return <Comment key={comment.id} data={comment} />;
            })}
      </div>
    </div>
  );
}

export default Posts;
