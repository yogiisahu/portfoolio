"use client"

import { motion, useMotionValue, useSpring } from "motion/react"

const VIEWBOX_WIDTH = 1088
const DEFAULT_GRADIENT_X = 544

export function SiteFooterInteractiveLogotype() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget
    const containerRect = container.getBoundingClientRect()
    const mouseX = event.clientX - containerRect.left
    const containerWidth = containerRect.width

    const normalizedX = (mouseX / containerWidth) * VIEWBOX_WIDTH
    const clampedX = Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX))

    gradientX1Raw.set(clampedX)
  }

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/10">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1088 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Y */}
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V96H64V0H96V96H64V256H32V96H0V0Z" fill="url(#yogesh_gradient)" />
            {/* O */}
            <path fillRule="evenodd" clipRule="evenodd" d="M160 0H288V256H160V0ZM192 32H256V224H192V32Z" fill="url(#yogesh_gradient)" />
            {/* G */}
            <path fillRule="evenodd" clipRule="evenodd" d="M384 0H512V256H384V0ZM416 32H480V128H448V160H480V224H416V32Z" fill="url(#yogesh_gradient)" />
            {/* E */}
            <path fillRule="evenodd" clipRule="evenodd" d="M576 0H704V32H608V96H672V128H608V224H704V256H576V0Z" fill="url(#yogesh_gradient)" />
            {/* S */}
            <path fillRule="evenodd" clipRule="evenodd" d="M768 0H896V128H800V224H896V256H768V160H864V96H768V0ZM800 32H864V96H800V32ZM800 160H864V224H800V160Z" fill="url(#yogesh_gradient)" />
            {/* H */}
            <path fillRule="evenodd" clipRule="evenodd" d="M960 0H992V96H1056V0H1088V256H1056V128H992V256H960V0Z" fill="url(#yogesh_gradient)" />

            <defs>
              <motion.linearGradient
                id="yogesh_gradient"
                x1={gradientX1}
                y1="0"
                x2="544"
                y2="256"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

