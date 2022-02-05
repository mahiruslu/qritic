import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
function Comments(props) {
  return (
    <div className="p-1 mb-5 max-w-full w-2/3 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center ">
      <div className="flex flex-row w-full">
        <div className="shrink-0 float-left">
          <img
            className="h-16 w-16 rounded-full border border-gray-100 shadow-sm object-top"
            src="../../public/img/1.jpg"
            alt="Mahir"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center content-center pl-5">
          <div className="text-xl font-medium text-black">
            {props.data.username}
          </div>{" "}
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-600 pt-5 ml-2">{props.data.username}</p>
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
