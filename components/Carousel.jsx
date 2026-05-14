"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Carousel({ items }) {
  const [current, setCurrent] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (items.length - 2))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoplay, items.length])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + (items.length - 2)) % (items.length - 2))
    setIsAutoplay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % (items.length - 2))
    setIsAutoplay(false)
  }

  return (
    <div
      className="relative w-full px-4 sm:px-0"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="min-w-1/3 flex-shrink-0 w-1/3">
              <div
                className={`p-6 sm:p-8 rounded-xl bg-gradient-to-br ${item.color} text-white text-center h-64 flex flex-col items-center justify-center group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-transparent hover:border-white/30`}
              >
                <div className="mb-4 text-5xl animate-rotate-once group-hover:animate-bounce">💼</div>
                <p className="font-bold text-xl sm:text-2xl mb-4 group-hover:text-white transition-colors">
                  {item.name}
                </p>
                <p className="text-3xl sm:text-4xl font-bold mb-2 animate-pulse-slow">{item.amount}</p>
                <p className="text-xs sm:text-sm text-white/80">Maximum funding limit</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8e1822] hover:bg-[#8e1822] p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg ml-2 sm:ml-0"
        title="Previous funding schemes"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8e1822] hover:bg-[#8e1822] p-3 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg mr-2 sm:mr-0"
        title="Next funding schemes"
      >
        <ChevronRight size={28} className="text-white" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: items.length - 2 }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i)
              setIsAutoplay(false)
            }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "bg-[#8e1822] w-8 h-3 shadow-lg" : "bg-slate-300 hover:bg-slate-400 w-3 h-3"
            }`}
            title={`Go to scheme group ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
