"use client"
import React, { useEffect, useState } from "react"
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    type HTMLMotionProps,
} from "framer-motion"
import { cn } from "../../lib/utils"

export function Pointer({
    className,
    style,
    children,
    ...props
}: HTMLMotionProps<"div">): React.ReactNode {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring physics for the cursor
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const [isActive, setIsActive] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Force hide standard cursor globally only if not mobile
        const styleTag = document.createElement("style");
        if (window.innerWidth >= 1024) {
            styleTag.innerHTML = `
                * { cursor: none !important; }
                a, button, [role="button"], .cursor-pointer { cursor: none !important; }
            `;
            document.head.appendChild(styleTag);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            if (!isActive) setIsActive(true)
        }

        const handleMouseLeave = () => setIsActive(false)
        const handleMouseEnter = () => setIsActive(true)

        if (window.innerWidth >= 1024) {
            window.addEventListener("mousemove", handleMouseMove, { passive: true })
            window.addEventListener("mouseleave", handleMouseLeave)
            window.addEventListener("mouseenter", handleMouseEnter)
        }

        return () => {
            if (styleTag.parentNode) document.head.removeChild(styleTag);
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
            window.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [isActive])

    if (isMobile) return null;

    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="pointer-events-none fixed z-[99999] top-0 left-0"
                    style={{
                        translateX: x,
                        translateY: y,
                        x: "-50%",
                        y: "-50%",
                        ...style,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    {...props}
                >
                    {children || (
                        <svg
                            stroke="white"
                            fill="black"
                            strokeWidth="1"
                            viewBox="0 0 16 16"
                            height="28"
                            width="28"
                            xmlns="http://www.w3.org/2000/svg"
                            className={cn("rotate-[-70deg]", className)}
                        >
                            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                        </svg>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
