

"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ServiceCard({ id, title, description, image, icon: Icon, story, slug }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/service/${slug || id}`}>
      <div
        className="group rounded-xl overflow-hidden border border-slate-200 hover:border-orange-500 transition-all duration-500 cursor-pointer hover:shadow-xl transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
          {image ? (
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
              {Icon && <Icon size={64} className="text-orange-600 opacity-50" />}
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 bg-white flex flex-col gap-4">
          <div className="flex items-start gap-3">
            {Icon && <Icon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />}
            <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-orange-600 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-slate-600">{description}</p>

          {story && (
            <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500 animate-pulse-slow">
              <p className="text-xs sm:text-sm text-slate-700 font-semibold italic flex items-center gap-2">
                <span className="text-orange-600 text-lg">✨</span>
                {story}
              </p>
            </div>
          )}

          {/* Learn More */}
          <div className="flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all hover:text-orange-700">
            <span>Learn More</span>
            <ArrowRight
              size={18}
              className={`transform transition-transform ${isHovered ? "translate-x-1 animate-bounce" : ""}`}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
