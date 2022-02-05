import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
function Comments(props) {
  return (
    <div class="p-1 mb-5 max-w-full w-2/3 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center ">
      <div class="flex flex-row w-full">
        <div class="shrink-0 float-left">
          <img
            class="h-16 w-16 rounded-full border border-gray-100 shadow-sm object-top"
            src="../../public/img/1.jpg"
            alt="Mahir"
          />
        </div>
        <div class="flex flex-col flex-1 justify-center content-center pl-5">
          <div class="text-xl font-medium text-black">
            {props.data.username}
          </div>{" "}
        </div>
      </div>
      <div class="">
        <p class="text-sm text-gray-600 pt-5 ml-2">{props.data.username}</p>
      </div>
      <div className="flex justify-start items-start w-full p-2">
        <div className="flex text-green-600 justify-start">
          <button className="text-green-600 flex">
            <FaArrowUp /> <span className="text-gray-600">12</span>
          </button>
        </div>
        <div className="ml-2 flex text-red-600">
          <button className="text-red-600 flex">
            <FaArrowDown /> <span className="text-gray-600">12</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
