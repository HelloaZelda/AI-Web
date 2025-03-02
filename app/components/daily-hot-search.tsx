"use client"

import { useState, useEffect } from "react"

export default function DailyHotSearch() {
  const [hotSearches, setHotSearches] = useState<string[]>([])

  useEffect(() => {
    // 这里应该是从实际API获取数据，现在我们用模拟数据
    const mockHotSearches = [
      "新冠疫苗最新进展",
      "全球经济复苏趋势",
      "人工智能在医疗领域的应用",
      "气候变化对农业的影响",
      "远程工作的未来发展",
    ]
    setHotSearches(mockHotSearches)
  }, [])

  return (
    <div className="bg-pastel-blue bg-opacity-50 dark:bg-pastel-cyan dark:bg-opacity-30 p-4 rounded-lg shadow-md animate-fadeIn transition-all duration-300 hover:shadow-xl hover-scale">
      <h2 className="text-2xl font-bold mb-2 text-pastel-purple dark:text-pastel-pink">每日热搜</h2>
      <ul className="list-disc list-inside">
        {hotSearches.map((search, index) => (
          <li key={index} className="text-gray-800 dark:text-white">
            {search}
          </li>
        ))}
      </ul>
    </div>
  )
}

