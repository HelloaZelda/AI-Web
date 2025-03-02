"use client"
import type React from "react"

import { useState, useEffect } from "react"
import "./globals.css"
import { Noto_Sans_SC } from "next/font/google"
import DynamicBackground from "./components/dynamic-background"
import Navigation from "./components/navigation"
import LanguageSwitcher from "./components/language-switcher"
import { motion } from "framer-motion"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "./contexts/language-context"
import HomePage from "./page"
import ClipboardPage from "./clipboard/page"
import ChatPage from "./chat/page"
import ContentPage from "./content/page"

const notoSansSC = Noto_Sans_SC({ subsets: ["latin"] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [activePage, setActivePage] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const pages = [
    { name: "首页", icon: "home", component: <HomePage /> },
    { name: "云剪贴板", icon: "content_paste", component: <ClipboardPage /> },
    { name: "AI聊天", icon: "chat", component: <ChatPage /> },
    { name: "我的内容", icon: "person", component: <ContentPage /> },
  ]

  return (
    <html lang="zh-CN" className={${notoSansSC.className} dark}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <script async src="https://fonts.googleapis.com/icon?family=Material+Icons"></script>
        <script async src="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"></script>
      </head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          <body className="bg-gradient-to-br from-pastel-blue via-pastel-cyan to-pastel-pink dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-800 dark:text-white min-h-screen">
            <LanguageSwitcher />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col min-h-screen"
            >
              <DynamicBackground />
              <div className="flex-grow flex flex-col relative z-10">
                <div className="app bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-lg max-w-[1250px] max-h-[860px] h-[90vh] mx-auto my-4 flex flex-col overflow-hidden relative w-full rounded-[14px] text-[18px] font-medium">
                  <main className="flex-grow overflow-hidden relative">
                    <div
                      className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out"
                      style={{ transform: translateY(-${activePage * 100}%) }}
                    >
                      {pages.map((page, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 overflow-auto">
                          {page.component}
                        </div>
                      ))}
                    </div>
                  </main>
                  <Navigation pages={pages} activePage={activePage} setActivePage={setActivePage} />
                </div>
              </div>
            </motion.div>
          </body>
        </LanguageProvider>
      </ThemeProvider>
    </html>
  )
}

import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
