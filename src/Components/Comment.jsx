import React from "react";
import axios from "axios";
import { FaPersonBooth, FaArrowRight } from "react-icons/fa";

function Comment(props) {
  return (
    <div className="p-1 max-w-full w-full mx-auto bg-white  flex flex-col items-center ">
      <div className="float-right text-black-400 w-full border-solid border-t-2 flex pt-2 pb-2">
        {props.data.email}
      </div>
      <div className="flex flex-row flex-1 justify-center content-center w-full border-l-2 border-solid border-black">
        <div className="flex flex-col pl-2">
          <p>{props.data.name}</p>
          <p className="text-gray-300 pl-2"> {props.data.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
