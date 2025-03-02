"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    clipboard: "Cloud Clipboard",
    aiChat: "AI Chat",
    myContent: "My Content",
    search: "Search...",
    weather: "Weather",
    dailyQuote: "Daily Quote",
    dailyHotSearch: "Trending",
    dailyFortune: "Daily Fortune",
    calendar: "Calendar",
    loading: "Loading...",
    humidity: "Humidity",
    temperature: "Temperature",
    paste: "Paste your content here...",
    save: "Save to Cloud",
    send: "Send",
    type: "Type your message...",
  },
  zh: {
    home: "首页",
    clipboard: "云剪贴板",
    aiChat: "AI聊天",
    myContent: "我的内容",
    search: "搜索...",
    weather: "今日天气",
    dailyQuote: "每日寄语",
    dailyHotSearch: "热搜榜",
    dailyFortune: "今日运势",
    calendar: "日历",
    loading: "加载中...",
    humidity: "湿度",
    temperature: "温度",
    paste: "在此粘贴内容...",
    save: "保存到云端",
    send: "发送",
    type: "输入消息...",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"))
  }

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

