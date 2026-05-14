"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServiceCard({
  id,
  title,
  description,
  image,
  icon: Icon,
  story,
  slug,
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/service/${slug.toLowerCase()}`} className="block h-full w-full">
      <div
        className="
          group h-full w-full flex flex-col md:flex-row
          rounded-xl overflow-hidden
          border border-slate-200 bg-white
          hover:border-[#63171c]
          transition-all duration-500
          cursor-pointer
          hover:shadow-xl
          transform hover:-translate-y-1
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-75 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
              {Icon && <Icon size={64} className="text-[#8e1822] opacity-50" />}
            </div>
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        <div className="flex-1 p-5 sm:p-6 flex flex-col gap-4 justify-between bg-white">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              {Icon && (
                <Icon className="w-6 h-6 text-[#8e1822] flex-shrink-0 mt-1" />
              )}
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#8e1822] transition-colors leading-tight">
                {title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 line-clamp-3 md:line-clamp-none">
              {description}
            </p>

            {story && (
              <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-[#963339] mt-2">
                <p className="text-xs sm:text-sm text-slate-700 font-semibold italic flex items-center gap-2">
                  <span className="text-[#8e1822] text-lg">✨</span>
                  {story}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-[#8e1822] font-semibold group-hover:gap-3 transition-all hover:text-[#63171c] mt-2">
            <span>Learn More</span>
            <ArrowRight
              size={18}
              className={`transform transition-transform ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}