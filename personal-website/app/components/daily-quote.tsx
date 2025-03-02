export default function DailyQuote() {
  // 这是一个占位符。您可以实现实际的引言API或使用预定义的列表。
  const quote = "成功不是最终的，失败也不是致命的，重要的是继续前进的勇气。 - 温斯顿·丘吉尔"

  return (
    <div className="bg-pastel-pink bg-opacity-50 dark:bg-pastel-purple dark:bg-opacity-30 p-4 rounded-lg shadow-md animate-fadeIn">
      <h2 className="text-2xl font-bold mb-2 text-pastel-purple dark:text-pastel-pink">每日寄语</h2>
      <p className="italic text-gray-800 dark:text-white">{quote}</p>
    </div>
  )
}

