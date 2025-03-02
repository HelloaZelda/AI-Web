"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const colors = [
  { main: "#FBDB4A", shades: ["#FAE073", "#FCE790", "#FADD65", "#E4C650"] },
  { main: "#F3934A", shades: ["#F7B989", "#F9CDAA", "#DD8644", "#F39C59"] },
  { main: "#EB547D", shades: ["#EE7293", "#F191AB", "#D64D72", "#C04567"] },
  { main: "#9F6AA7", shades: ["#B084B6", "#C19FC7", "#916198", "#82588A"] },
  { main: "#5476B3", shades: ["#6382B9", "#829BC7", "#4D6CA3", "#3E5782"] },
  { main: "#2BB19B", shades: ["#4DBFAD", "#73CDBF", "#27A18D", "#1F8171"] },
  { main: "#70B984", shades: ["#7FBE90", "#98CBA6", "#68A87A", "#5E976E"] },
]

const TypingTransition: React.FC = () => {
  const [text, setText] = useState("")
  const svgRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const addDecor = (letter: HTMLSpanElement, color: (typeof colors)[0]) => {
      const rect = letter.getBoundingClientRect()
      const x0 = rect.left + rect.width / 2
      const y0 = rect.top + rect.height / 2
      const shade = color.shades[Math.floor(Math.random() * 4)]

      for (let i = 0; i < 8; i++) {
        addShape("polygon", x0, y0, shade)
        addShape("circle", x0, y0, "#eee")
      }
    }

    const addShape = (type: "polygon" | "circle", x0: number, y0: number, color: string) => {
      if (!svgRef.current) return

      const shape = document.createElementNS("http://www.w3.org/2000/svg", type)
      const size = 10 + Math.random() * 20

      if (type === "polygon") {
        shape.setAttribute("points", `0,0 ${size * 2},0 ${size},${size * 2}`)
      } else {
        shape.setAttribute("r", (size * 0.5).toString())
      }

      shape.setAttribute("fill", color)
      svgRef.current.appendChild(shape)

      const angle = Math.random() * Math.PI * 2
      const distance = 50 + Math.random() * 50
      const x = x0 + distance * Math.cos(angle)
      const y = y0 + distance * Math.sin(angle)

      motion.animate(
        shape,
        {
          x: [x0, x],
          y: [y0, y],
          opacity: [1, 0],
          scale: [1, 0],
        },
        { duration: 0.6, ease: "easeOut" },
      )

      setTimeout(() => {
        if (svgRef.current) svgRef.current.removeChild(shape)
      }, 600)
    }

    const animateLetter = (letter: HTMLSpanElement, index: number) => {
      const color = colors[index % colors.length]
      letter.style.color = color.main

      motion.animate(
        letter,
        {
          scale: [0, 1],
          opacity: [0, 1],
          y: [20, -20, 0],
          rotate: [-50 + Math.random() * 100, 0],
        },
        { duration: 0.4, ease: "easeOut" },
      )

      setTimeout(() => addDecor(letter, color), 150)
    }

    if (textRef.current) {
      textRef.current.innerHTML = ""
      text.split("").forEach((char, index) => {
        const span = document.createElement("span")
        span.textContent = char
        textRef.current?.appendChild(span)
        setTimeout(() => animateLetter(span, index), index * 100)
      })
    }
  }, [text])

  return (
    <div className="typing-transition">
      <p ref={textRef} className="text"></p>
      <svg ref={svgRef} className="decor-svg"></svg>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        className="input"
      />
      <style jsx>{`
        .typing-transition {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #22292C;
          font-family: 'Rubik Mono One', sans-serif;
        }
        .text {
          font-size: 3rem;
          height: 4rem;
          margin: 0;
        }
        .decor-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .input {
          margin-top: 2rem;
          font-size: 1.5rem;
          padding: 0.5rem;
          background: none;
          border: 1px solid #ddd;
          color: #eee;
        }
      `}</style>
    </div>
  )
}

export default TypingTransition

