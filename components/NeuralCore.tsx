import React, { useRef } from 'react';
import { AnimatedBeam } from './AnimatedBeam';
import { cn } from '../lib/utils';
import DotGrid from './DotGrid';

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E8E9EB] bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const NeuralCore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full h-[500px] md:h-[600px] items-center justify-center overflow-hidden bg-white border border-[#E8E9EB] rounded-[12px] shadow-sm"
      ref={containerRef}
    >
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#F3F4F6"
          activeColor="#5227FF"
          proximity={100}
          shockRadius={200}
          shockStrength={3}
          resistance={750}
          returnDuration={1.2}
        />
      </div>

      <div className="flex size-full flex-col max-w-lg max-h-[240px] items-stretch justify-between gap-10 relative z-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <span className="material-icons text-gray-400">fingerprint</span>
          </Circle>
          <Circle ref={div5Ref}>
            <span className="material-icons text-gray-400">radar</span>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <span className="material-icons text-gray-400">hub</span>
          </Circle>
          <Circle ref={div4Ref} className="size-20 border-[#5227FF]/30 bg-white/80 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(82,39,255,0.3)]">
            <span className="material-icons text-3xl text-[#5227FF]">psychology</span>
          </Circle>
          <Circle ref={div6Ref}>
            <span className="material-icons text-gray-400">security</span>
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <span className="material-icons text-gray-400">dns</span>
          </Circle>
          <Circle ref={div7Ref}>
            <span className="material-icons text-gray-400">gavel</span>
          </Circle>
        </div>
      </div>

      {/* Beams from inputs to core */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-70}
        gradientStartColor="#9ca3af"
        gradientStopColor="#5227FF"
        className="z-0"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        gradientStartColor="#9ca3af"
        gradientStopColor="#5227FF"
        className="z-0"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={70}
        gradientStartColor="#9ca3af"
        gradientStopColor="#5227FF"
        className="z-0"
      />

      {/* Beams from core to outputs */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        curvature={-70}
        gradientStartColor="#5227FF"
        gradientStopColor="#10b981"
        className="z-0"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        gradientStartColor="#5227FF"
        gradientStopColor="#10b981"
        className="z-0"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
        curvature={70}
        gradientStartColor="#5227FF"
        gradientStopColor="#10b981"
        className="z-0"
      />
    </div>
  );
};

export default NeuralCore;
