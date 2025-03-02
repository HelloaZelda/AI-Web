"use client"

import { useState } from "react"
import ChatList from "../components/chat-list"

const chatOptions = [
  { id: "YDTDwpX5LKtdsRV6", name: "深度探究", src: "https://udify.app/chatbot/YDTDwpX5LKtdsRV6" },
  { id: "zRWq0cP3z1ypEUlt", name: "学习辅导", src: "https://udify.app/chatbot/zRWq0cP3z1ypEUlt" },
  { id: "jcjfDiIXIrk4TMPV", name: "实验性数字人", src: "https://udify.app/chatbot/jcjfDiIXIrk4TMPV" },
]

export default function AIChat() {
  const [activeChat, setActiveChat] = useState(chatOptions[0].id)

  const handleSelectChat = (id: string) => {
    setActiveChat(id)
  }

  const activeChatSrc = chatOptions.find((chat) => chat.id === activeChat)?.src

  return (
    <div className="flex h-full animate-fadeIn">
      <ChatList chats={chatOptions} activeChat={activeChat} onSelectChat={handleSelectChat} />
      <div className="flex-grow flex flex-col h-full">
        <h1 className="text-3xl font-bold mb-4 p-4">快速AI聊天</h1>
        {activeChatSrc && (
          <div className="flex-grow">
            <iframe
              src={activeChatSrc}
              className="w-full h-full min-h-[700px]"
              frameBorder="0"
              allow="microphone"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

