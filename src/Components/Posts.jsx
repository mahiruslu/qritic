import React from "react";
import { FaArrowUp, FaArrowDown, FaComment } from "react-icons/fa";
import Comments from "./Comments.jsx";
import axios from "axios";
function Posts(props) {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function getComments(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    return comments.map((item) => <Comments key={item.id} data={item} />);
  }
  return (
    <div class="p-1 mb-5 max-w-full w-2/3 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center ">
      <div class="flex flex-row w-full">
        <div class="shrink-0 float-left">
          <img
            class="h-16 w-16 rounded-full border border-gray-100 shadow-sm object-top"
            src={props.user.id !== 1 ? `../img/empty.png` : `../img/1.jpg`}
            alt="Mahir"
          />
        </div>
        <div class="flex flex-col flex-1 justify-center content-center pl-5">
          <div class="text-xl font-medium text-black flex flex-col">
            <div className="flex">
              <p>{props.user.name} - </p>
              <p class="text-gray-300"> @{props.user.username}</p>
            </div>
            <div class="">
              <p class="text-sm text-gray-500">{props.post.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <p class="text-sm text-gray-900 pt-5 ml-2">{props.post.body}</p>
      </div>
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
        <button className="ml-2 text-gray-600" onClick={getComments}>
          <FaComment />
        </button>
      </div>
    </div>
  );
}

export default Posts;
