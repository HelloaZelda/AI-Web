import type React from "react"
import { useLanguage } from "../contexts/language-context"

interface NavigationProps {
  pages: { name: string; icon: string; component: React.ReactNode }[]
  activePage: number
  setActivePage: (index: number) => void
}

const Navigation: React.FC<NavigationProps> = ({ pages, activePage, setActivePage }) => {
  const { t } = useLanguage()

  return (
    <nav className="menu flex-shrink-0 flex justify-center bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-md h-20 border-t border-gray-200 dark:border-gray-700">
      {pages.map((page, index) => (
        <a
          key={index}
          href="#"
          className={`menu-item flex flex-col items-center justify-center flex-grow text-center p-2 transition-colors duration-300 ${
            activePage === index
              ? "text-primary dark:text-primary-dark"
              : "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark"
          }`}
          onClick={(e) => {
            e.preventDefault()
            setActivePage(index)
          }}
        >
          <span className="material-icons text-3xl mb-1">{page.icon}</span>
          <span className="menu-item-label text-sm">{t(page.name)}</span>
        </a>
      ))}
    </nav>
  )
}

export default Navigation

