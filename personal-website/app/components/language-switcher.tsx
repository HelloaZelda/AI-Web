"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/language-context"

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md 
                 border border-white border-opacity-20 shadow-lg text-white font-semibold
                 hover:bg-opacity-30 transition-all duration-300"
    >
      {language === "en" ? "中文" : "English"}
    </motion.button>
  )
}

