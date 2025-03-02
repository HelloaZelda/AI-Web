import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to Lucas'Web",
        home: "Home",
        clipboard: "Cloud Clipboard",
        aiChat: "AI Chat",
        myContent: "My Content",
        weather: "Today's Weather",
        dailyQuote: "Daily Quote",
        dailyHotSearch: "Daily Hot Search",
        dailyFortune: "Daily Fortune",
        loading: "Loading...",
        humidity: "Humidity",
        drawFortune: "Draw Fortune",
      },
    },
    zh: {
      translation: {
        welcome: "欢迎来到 Lucas'Web",
        home: "首页",
        clipboard: "云剪贴板",
        aiChat: "AI聊天",
        myContent: "我的内容",
        weather: "今日天气",
        dailyQuote: "每日寄语",
        dailyHotSearch: "每日热搜",
        dailyFortune: "每日求签",
        loading: "加载中...",
        humidity: "湿度",
        drawFortune: "抽签",
      },
    },
  },
  lng: "zh", // Set the default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

