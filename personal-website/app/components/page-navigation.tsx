"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PageNavigation() {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  return (
    <nav className="menu">
      <Link href="/" className={`menu-item ${currentPath === "/" ? "active" : ""}`}>
        <span className="material-icons">home</span>
        <span className="menu-item-label">首页</span>
      </Link>
      <Link href="/clipboard" className={`menu-item ${currentPath === "/clipboard" ? "active" : ""}`}>
        <span className="material-icons">content_paste</span>
        <span className="menu-item-label">云剪贴板</span>
      </Link>
      <Link href="/chat" className={`menu-item ${currentPath === "/chat" ? "active" : ""}`}>
        <span className="material-icons">chat</span>
        <span className="menu-item-label">AI聊天</span>
      </Link>
      <Link href="/content" className={`menu-item ${currentPath === "/content" ? "active" : ""}`}>
        <span className="material-icons">person</span>
        <span className="menu-item-label">我的内容</span>
      </Link>
      <style jsx>{`
        .menu {
          display: flex;
          flex-grow: 1;
          height: 72px;
          max-width: 370px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #fff;
          box-shadow: 0 0 1px 0 rgba(52, 46, 173, 0.25), 0 15px 30px 0 rgba(52, 46, 173, 0.1);
        }
        .menu-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          text-decoration: none;
          transition: 0.25s ease;
        }
        .menu-item:focus,
        .menu-item:hover,
        .menu-item.active {
          outline: none;
        }
        .menu-item:focus .material-icons,
        .menu-item:hover .material-icons,
        .menu-item.active .material-icons {
          font-family: "Material Icons";
          color: #342ead;
        }
        .menu-item:focus .menu-item-label,
        .menu-item:hover .menu-item-label,
        .menu-item.active .menu-item-label {
          color: #342ead;
        }
        .material-icons {
          font-family: "Material Icons Outlined";
          display: block;
          margin-bottom: 4px;
          font-size: 26px;
          color: #aeabde;
          transition: 0.25s ease;
        }
        .menu-item-label {
          display: block;
          font-size: 13px;
          color: #c2c0e6;
          transition: 0.25s ease;
        }
      `}</style>
    </nav>
  )
}

