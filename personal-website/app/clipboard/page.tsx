"use client"

import { useState } from "react"

export default function CloudClipboard() {
  const [clipboardContent, setClipboardContent] = useState("")

  const handleSave = () => {
    // 实现云保存功能
    console.log("保存到云端:", clipboardContent)
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      <h1 className="text-3xl font-bold">云剪贴板</h1>
      <textarea
        value={clipboardContent}
        onChange={(e) => setClipboardContent(e.target.value)}
        className="w-full h-64 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        placeholder="在此粘贴您的内容..."
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        保存到云端
      </button>
    </div>
  )
}

