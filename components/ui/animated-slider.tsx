"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SliderProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function AnimatedSlider({ items, autoPlay = true, autoPlayInterval = 5000 }: SliderProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setDirection("next")
      setCurrent((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, items.length])

  const goToPrev = () => {
    setDirection("prev")
    setCurrent((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setDirection("next")
    setCurrent((prev) => (prev + 1) % items.length)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              idx === current
                ? "opacity-100 scale-100"
                : direction === "next"
                  ? idx > current
                    ? "opacity-0 scale-95 translate-x-full"
                    : "opacity-0 scale-95 -translate-x-full"
                  : idx > current
                    ? "opacity-0 scale-95 -translate-x-full"
                    : "opacity-0 scale-95 translate-x-full"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
