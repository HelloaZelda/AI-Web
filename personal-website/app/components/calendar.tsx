"use client"

import type React from "react"
import { useState } from "react"

const Calendar: React.FC = () => {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const renderCalendar = () => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDate =
        i === currentDate.getDate() &&
        selectedDate.getMonth() === currentDate.getMonth() &&
        selectedDate.getFullYear() === currentDate.getFullYear()
      const isSelected = i === selectedDate.getDate()
      days.push(
        <div
          key={i}
          className={`p-2 text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full
            ${isCurrentDate ? "bg-blue-500 text-white" : ""}
            ${isSelected ? "border-2 border-blue-500" : ""}
          `}
          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))}
        >
          {i}
        </div>,
      )
    }
    return days
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          &lt;
        </button>
        <h2 className="text-xl font-bold">
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  )
}

export default Calendar

