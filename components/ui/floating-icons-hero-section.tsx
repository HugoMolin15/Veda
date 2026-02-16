'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

// Interface for the props of each individual icon.
interface IconProps {
    id: number;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    className: string; // Used for custom positioning of the icon.
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
    icons: IconProps[];
    children?: React.ReactNode;
    className?: string;
}

interface IconInternalProps {
    mouseX: React.MutableRefObject<number>;
    mouseY: React.MutableRefObject<number>;
    iconData: IconProps;
    index: number;
}

// A single icon component with its own motion logic
const Icon: React.FC<IconInternalProps> = ({
    mouseX,
    mouseY,
    iconData,
    index,
}) => {
    const ref = React.useRef<HTMLDivElement>(null);

    // Motion values for the icon's position, with spring physics for smooth movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    React.useEffect(() => {
        const handleMouseMove = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const distance = Math.sqrt(
                    Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
                    Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
                );

                // If the cursor is close enough, repel the icon
                if (distance < 150) {
                    const angle = Math.atan2(
                        mouseY.current - (rect.top + rect.height / 2),
                        mouseX.current - (rect.left + rect.width / 2)
                    );
                    // The closer the cursor, the stronger the repulsion
                    const force = (1 - distance / 150) * 50;
                    x.set(-Math.cos(angle) * force);
                    y.set(-Math.sin(angle) * force);
                } else {
                    // Return to original position when cursor is away
                    x.set(0);
                    y.set(0);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y, mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            key={iconData.id}
            style={{
                x: springX,
                y: springY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={cn('absolute', iconData.className)}
        >
            {/* Inner wrapper for the continuous floating animation */}
            <motion.div
                className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-2 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/10"
                animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 6, 0, -6, 0],
                    rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
            >
                <iconData.icon className="w-6 h-6 md:w-8 h-8 opacity-60 text-white" />
            </motion.div>
        </motion.div>
    );
};

const FloatingIconsBackground = ({ icons, children, className }: FloatingIconsHeroProps) => {
    // Refs to track the raw mouse position
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={cn(
                'relative w-full overflow-hidden',
                className
            )}
        >
            {/* Container for the background floating icons */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {icons.map((iconData, index) => (
                    <Icon
                        key={iconData.id}
                        mouseX={mouseX}
                        mouseY={mouseY}
                        iconData={iconData}
                        index={index}
                    />
                ))}
            </div>

            {/* Container for the foreground content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export { FloatingIconsBackground };
