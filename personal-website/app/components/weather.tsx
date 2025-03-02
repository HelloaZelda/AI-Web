"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import WeatherIcon from "./weather-icon"

interface WeatherData {
  location: {
    name: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
    }
    humidity: number
  }
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=f919bdddeb734a81b94151739251802&q=auto:ip&aqi=no`,
        )
        const data = await response.json()
        setWeather(data)
      } catch (error) {
        console.error("Error fetching weather:", error)
      }
    }

    fetchWeather()
  }, [])

  const getWeatherIconType = (
    condition: string,
  ): "sun-shower" | "thunder-storm" | "cloudy" | "flurries" | "sunny" | "rainy" => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes("rain") && lowerCondition.includes("sun")) return "sun-shower"
    if (lowerCondition.includes("thunder") || lowerCondition.includes("storm")) return "thunder-storm"
    if (lowerCondition.includes("cloud")) return "cloudy"
    if (lowerCondition.includes("snow") || lowerCondition.includes("sleet")) return "flurries"
    if (lowerCondition.includes("sun") || lowerCondition.includes("clear")) return "sunny"
    if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) return "rainy"
    return "sunny" // default
  }

  return (
    <div className="bg-pastel-cyan bg-opacity-50 dark:bg-pastel-blue dark:bg-opacity-30 p-4 rounded-lg shadow-md animate-fadeIn transition-all duration-300 hover:shadow-xl hover-scale">
      <h2 className="text-2xl font-bold mb-2 text-pastel-purple dark:text-pastel-pink">{t("weather")}</h2>
      {weather ? (
        <div className="space-y-2">
          <p className="text-gray-800 dark:text-white text-lg font-semibold">{weather.location.name}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 dark:text-white text-lg">
                {weather.current.condition.text}, {weather.current.temp_c}°C
              </p>
              <p className="text-gray-800 dark:text-white">
                {t("humidity")}: {weather.current.humidity}%
              </p>
            </div>
            <WeatherIcon type={getWeatherIconType(weather.current.condition.text)} />
          </div>
        </div>
      ) : (
        <p className="text-gray-800 dark:text-white">{t("loading")}</p>
      )}
    </div>
  )
}

