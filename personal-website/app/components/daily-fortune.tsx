"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type FortuneLevel = "大吉" | "吉" | "平" | "凶" | "大凶"
type FortuneResult = {
  level: FortuneLevel
  description: string
}

const fortunes: Record<FortuneLevel, string[]> = {
  大吉: ["学的全会，蒙的全对", "一发入魂", "事事顺心"],
  吉: ["运气不错，可以尝试新事物", "与朋友相聚会带来好运"],
  平: ["平平淡淡才是真", "适合静下心来思考"],
  凶: ["小心谨慎为好，避免冒险", "今天不宜做重要决定"],
  大凶: ["被大神鄙视", "会被当做卖面膜的", "宜居家不出门"],
}

const fortuneLevels: FortuneLevel[] = ["大吉", "吉", "平", "凶", "大凶"]

const getRandomFortune = (level: FortuneLevel): FortuneResult => {
  const descriptions = fortunes[level]
  return {
    level,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
  }
}

export default function DailyFortune() {
  const [fortune, setFortune] = useState<FortuneResult | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const storedFortune = localStorage.getItem("dailyFortune")
    const storedDate = localStorage.getItem("fortuneDate")
    const today = new Date().toDateString()

    if (storedFortune && storedDate === today) {
      setFortune(JSON.parse(storedFortune))
    }
  }, [])

  const drawFortune = () => {
    setIsDrawing(true)
    const interval = setInterval(() => {
      const randomLevel = fortuneLevels[Math.floor(Math.random() * fortuneLevels.length)]
      setFortune(getRandomFortune(randomLevel))
    }, 100)

    setTimeout(() => {
      clearInterval(interval)
      setIsDrawing(false)
      const finalLevel = fortuneLevels[Math.floor(Math.random() * fortuneLevels.length)]
      const result = getRandomFortune(finalLevel)
      setFortune(result)
      localStorage.setItem("dailyFortune", JSON.stringify(result))
      localStorage.setItem("fortuneDate", new Date().toDateString())
    }, 2000)
  }

  const getFortuneLevelColor = (level: FortuneLevel) => {
    switch (level) {
      case "大吉":
        return "text-red-500"
      case "吉":
        return "text-orange-500"
      case "平":
        return "text-yellow-500"
      case "凶":
        return "text-blue-500"
      case "大凶":
        return "text-purple-500"
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-500">今日运势</h2>
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">§ ⚔ §</div>
      </div>
      <AnimatePresence mode="wait">
        {fortune ? (
          <motion.div
            key={fortune.level + fortune.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-4"
          >
            <h3 className={`text-4xl font-bold ${getFortuneLevelColor(fortune.level)}`}>{fortune.level}</h3>
            <p className="text-gray-600 dark:text-gray-300">{fortune.description}</p>
          </motion.div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">点击下方按钮抽取今日运势</p>
        )}
      </AnimatePresence>
      <div className="text-center mt-6">
        <button
          onClick={drawFortune}
          disabled={isDrawing}
          className={`bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200
            ${isDrawing ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600 hover:scale-105"}
          `}
        >
          {isDrawing ? "抽签中..." : "抽签"}
        </button>
      </div>
    </div>
  )
}

