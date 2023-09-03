import React from "react";
import { USER_LOGO } from "../utils/UserLogoImage";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img src={USER_LOGO} className="w-8 h-8" alt="user" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
