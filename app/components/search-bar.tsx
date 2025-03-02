"use client"

import type React from "react"

import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // 实现搜索功能
    console.log("搜索:", query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="搜索..."
        className="w-full max-w-md px-4 py-2 rounded-l-lg border border-pastel-blue focus:border-pastel-purple dark:border-pastel-purple dark:focus:border-pastel-pink focus:outline-none focus:ring-2 focus:ring-pastel-purple dark:focus:ring-pastel-pink dark:bg-gray-800"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-pastel-blue text-white rounded-r-lg hover:bg-pastel-purple focus:outline-none focus:ring-2 focus:ring-pastel-purple dark:bg-pastel-purple dark:hover:bg-pastel-pink dark:focus:ring-pastel-pink transition-colors duration-200"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  )
}

