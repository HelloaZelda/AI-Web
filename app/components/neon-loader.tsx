"use client"

import type React from "react"
import { motion } from "framer-motion"

const NeonLoader: React.FC = () => {
  return (
    <div className="loader">
      {[...Array(4)].map((_, index) => (
        <motion.span
          key={index}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      ))}
      <style jsx>{`
        .loader {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
          animation: animate 0.8s linear infinite;
        }
        @keyframes animate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loader span {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
        }
        .loader span:nth-child(1) { filter: blur(5px); }
        .loader span:nth-child(2) { filter: blur(10px); }
        .loader span:nth-child(3) { filter: blur(25px); }
        .loader span:nth-child(4) { filter: blur(50px); }
        .loader:after {
          content: '';
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          bottom: 10px;
          background: #240229;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}

export default NeonLoader

