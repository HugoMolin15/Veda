import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
    sentence?: string;
    separator?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
}

const TrueFocus = ({
    sentence = 'True Focus',
    separator = ' ',
    manualMode = false,
    blurAmount = 5,
    borderColor = 'green',
    glowColor = 'rgba(0, 255, 0, 0.6)',
    animationDuration = 0.5,
    pauseBetweenAnimations = 1
}: TrueFocusProps) => {
    const words = sentence.split(separator);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        let interval: any;

        // If not in manual mode, or if we were in manual mode but want to finish the cycle
        if (!manualMode) {
            interval = setInterval(
                () => {
                    setCurrentIndex(prev => (prev + 1) % words.length);
                },
                (animationDuration + pauseBetweenAnimations) * 1000
            );
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        if (currentIndex === null || currentIndex === -1) return;
        if (!wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height
        });
    }, [currentIndex, words.length]);

    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };

    return (
        <div
            className="relative flex gap-4 justify-center items-center flex-wrap"
            ref={containerRef}
            style={{ outline: 'none', userSelect: 'none' }}
        >
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={el => (wordRefs.current[index] = el)}
                        className="relative text-[2rem] md:text-[3rem] font-black leading-none"
                        style={{
                            filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                            transition: `filter ${animationDuration}s ease`,
                            outline: 'none',
                            userSelect: 'none',
                            color: '#0D1B1E'
                        }}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="absolute top-0 left-0 pointer-events-none box-border border-0"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0
                }}
                transition={{
                    duration: animationDuration,
                    ease: "easeInOut"
                }}
            >
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
                    style={{
                        borderColor: borderColor,
                        filter: `drop-shadow(0 0 4px ${glowColor})`
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
                    style={{
                        borderColor: borderColor,
                        filter: `drop-shadow(0 0 4px ${glowColor})`
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
                    style={{
                        borderColor: borderColor,
                        filter: `drop-shadow(0 0 4px ${glowColor})`
                    }}
                ></span>
                <span
                    className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
                    style={{
                        borderColor: borderColor,
                        filter: `drop-shadow(0 0 4px ${glowColor})`
                    }}
                ></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;
