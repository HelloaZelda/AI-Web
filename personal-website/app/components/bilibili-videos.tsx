"use client"

import { useState, useEffect } from "react"

interface BilibiliVideo {
  aid: string
  title: string
  pic: string
}

export default function BilibiliVideos() {
  const [videos, setVideos] = useState<BilibiliVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/bilibili-videos")
        const data = await response.json()

        if (Array.isArray(data)) {
          setVideos(data)
        } else if (data.data && Array.isArray(data.data.list)) {
          setVideos(data.data.list)
        } else {
          throw new Error("Unexpected data format")
        }
      } catch (error) {
        console.error("获取B站视频时出错:", error)
        setError("无法加载视频，请稍后再试。")
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return <div className="text-center text-pastel-purple dark:text-pastel-pink">正在加载B站视频...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <section className="animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-pastel-purple dark:text-pastel-pink">我的B站视频</h2>
      {videos.length === 0 ? (
        <p className="text-center text-gray-800 dark:text-white">暂无视频</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div
              key={video.aid}
              className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={video.pic || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 dark:text-white">{video.title}</h3>
              <a
                href={`https://www.bilibili.com/video/${video.aid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pastel-purple dark:text-pastel-pink hover:underline inline-block mt-2"
              >
                在B站观看
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

