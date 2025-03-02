"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SearchBar from "./components/search-bar"
import Weather from "./components/weather"
import DailyQuote from "./components/daily-quote"
import DailyHotSearch from "./components/daily-hot-search"
import DailyFortune from "./components/daily-fortune"
import Calendar from "./components/calendar"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date: Date, locale: string) => {
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    })
  }

  const formatTime = (date: Date, locale: string) => {
    return date.toLocaleTimeString(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="space-y-8">
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        欢迎，Lucas / Welcome, Lucas
      </motion.h1>
      <motion.div
        className="text-center space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-3xl font-semibold">
          {formatDate(currentTime, "zh-CN")}
          <br />
          {formatDate(currentTime, "en-US")}
        </div>
        <div className="text-2xl text-gray-600 dark:text-gray-300">
          {formatTime(currentTime, "zh-CN")}
          <br />
          {formatTime(currentTime, "en-US")}
        </div>
      </motion.div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Weather />
        <DailyQuote />
        <DailyHotSearch />
        <DailyFortune />
        <Calendar />
      </div>
    </div>
  )
}

