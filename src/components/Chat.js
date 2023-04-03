import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";

import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chat-info">
        <span>{data.user?.displayName}</span>
        <div className="chat-icon">
          {/* <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" /> */}
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
