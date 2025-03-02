import type React from "react"
import { MessageCircle } from "lucide-react"

interface ChatOption {
  id: string
  name: string
  src: string
}

interface ChatListProps {
  chats: ChatOption[]
  activeChat: string
  onSelectChat: (id: string) => void
}

const ChatList: React.FC<ChatListProps> = ({ chats, activeChat, onSelectChat }) => {
  return (
    <div className="w-64 h-full bg-gray-100 dark:bg-gray-800 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold p-4 border-b border-gray-200 dark:border-gray-700">嵌入聊天列表</h2>
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${
              activeChat === chat.id ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" : ""
            }`}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="flex items-center">
              <MessageCircle className="mr-2" size={20} />
              <span>{chat.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChatList

