"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const colors = [
  { bg: "#FBDB4A", text: "#000000" }, // Yellow
  { bg: "#F3934A", text: "#FFFFFF" }, // Orange
  { bg: "#EB547D", text: "#FFFFFF" }, // Pink
  { bg: "#9F6AA7", text: "#FFFFFF" }, // Purple
  { bg: "#5476B3", text: "#FFFFFF" }, // Blue
]

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const text = "Welcome, Lucas"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []

    const createParticles = (x: number, y: number, color: string) => {
      for (let i = 0; i < 10; i++) {
        particles.push({
          x,
          y,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 8,
          speedY: (Math.random() - 0.5) * 8,
          color,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.size *= 0.95

        if (particle.size < 0.1) {
          particles.splice(index, 1)
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const cleanup = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearTimeout(cleanup)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative flex flex-wrap justify-center gap-2">
        {text.split("").map((char, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg -z-10"
              style={{ backgroundColor: colors[index % colors.length].bg }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.2,
              }}
            />
            <motion.span
              className={`char-${index} inline-block text-7xl font-bold px-4 py-2`}
              style={{ color: colors[index % colors.length].text }}
              onAnimationComplete={() => {
                if (canvasRef.current) {
                  const rect = document.querySelector(`.char-${index}`)?.getBoundingClientRect()
                  if (rect) {
                    createParticles(
                      rect.left + rect.width / 2,
                      rect.top + rect.height / 2,
                      colors[index % colors.length].bg,
                    )
                  }
                }
              }}
            >
              {char}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SplashScreen

