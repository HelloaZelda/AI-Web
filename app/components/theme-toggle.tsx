"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button onClick={toggleTheme} className="c-theme" aria-label="Toggle theme">
      <div className="c-theme__track"></div>
      <div className="c-theme__knob">
        <div className="c-theme__icon-wrapper c-theme__icon-wrapper--light">
          <svg className="c-theme__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.828 5.243L2.343 3.757a1 1 0 0 1 1.414-1.414l1.486 1.485a5.027 5.027 0 0 0-1.415 1.415zM7 3.1V1a1 1 0 1 1 2 0v2.1a5.023 5.023 0 0 0-2 0zm3.757.728l1.486-1.485a1 1 0 1 1 1.414 1.414l-1.485 1.486a5.027 5.027 0 0 0-1.415-1.415zM12.9 7H15a1 1 0 0 1 0 2h-2.1a5.023 5.023 0 0 0 0-2zm-.728 3.757l1.485 1.486a1 1 0 1 1-1.414 1.414l-1.486-1.485a5.027 5.027 0 0 0 1.415-1.415zM9 12.9V15a1 1 0 0 1-2 0v-2.1a5.023 5.023 0 0 0 2 0zm-3.757-.728l-1.486 1.485a1 1 0 0 1-1.414-1.414l1.485-1.486a5.027 5.027 0 0 0 1.415 1.415zM3.1 9H1a1 1 0 1 1 0-2h2.1a5.023 5.023 0 0 0 0 2zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="c-theme__icon-wrapper c-theme__icon-wrapper--dark">
          <svg className="c-theme__icon" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.914 0a6.874 6.874 0 0 0-1.26 3.972c0 3.875 3.213 7.017 7.178 7.017.943 0 1.843-.178 2.668-.5C15.423 13.688 12.34 16 8.704 16 4.174 16 .5 12.41.5 7.982.5 3.814 3.754.389 7.914 0z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .c-theme {
          margin: 0.8rem;
          border: 0;
          background: transparent;
          cursor: pointer;
          width: 4.8rem;
          position: relative;
          padding: 0;
          transition: all 200ms;
        }
        .c-theme__track {
          background: var(--gray100);
          height: 1.6rem;
          width: 100%;
          border-radius: 999px;
          position: absolute;
          right: 0;
          left: 0;
          transition: all 200ms;
        }
        .c-theme__knob {
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          position: relative;
          box-shadow: var(--shadow--keyline), 0 0.2rem 0.4rem 0 var(--shadow-ambientColor);
          top: -0.4rem;
          transition: transform 200ms, background 200ms;
        }
        .c-theme__icon {
          fill: currentColor;
          width: 1.6rem;
          height: 1.6rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .c-theme__icon-wrapper {
          position: relative;
          transition: transform 200ms;
        }
        .c-theme__icon-wrapper--light {
          color: var(--yellow200);
          transform: ${theme === "dark" ? "scaleX(0) scaleY(0) rotate(90deg)" : "scaleX(1) scaleY(1) rotate(0deg)"};
        }
        .c-theme__icon-wrapper--dark {
          color: var(--blue300);
          transform: ${theme === "dark" ? "scaleX(1) scaleY(1) rotate(0deg)" : "scaleX(0) scaleY(0) rotate(90deg)"};
        }
        .c-theme__knob {
          transform: ${theme === "dark" ? "translateX(2.4rem)" : "translateX(0)"};
        }
        .c-theme__track {
          background: ${theme === "dark" ? "var(--blue100)" : "var(--gray100)"};
        }
      `}</style>
    </button>
  )
}

export default ThemeToggle

