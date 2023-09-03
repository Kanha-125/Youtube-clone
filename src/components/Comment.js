import React from "react";
import { USER_LOGO } from "../utils/UserLogoImage";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200 shadow-sm p-2 rounded-lg my-1">
      <img src={USER_LOGO} alt="user" className="w-10 h-10 " />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
