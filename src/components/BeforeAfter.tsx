"use client";
import Image from "next/image";
import { useRef, useState } from "react";

type BeforeAfterProps = {
  beforeUrl: string;
  afterUrl: string;
  label?: string;
};

export default function BeforeAfter({ beforeUrl, afterUrl, label }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [percent, setPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePercentFromClientX = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xWithin = clientX - rect.left;
    const next = Math.min(100, Math.max(0, (xWithin / rect.width) * 100));
    setPercent(next);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch { }
    updatePercentFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePercentFromClientX(e.clientX);
  };

  const onPointerUpOrCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch { }
  };

  return (
    <div className="select-none" aria-label={label ?? "Before and after comparison"}>
      <div
        ref={containerRef}
        className="relative h-72 w-full overflow-hidden rounded-lg border border-black/10 sm:h-96 touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUpOrCancel}
        onPointerCancel={onPointerUpOrCancel}
      >
        {/* Base image (after) */}
        <Image src={afterUrl} alt="After" fill className="object-cover" />
        {/* Overlay image (before) clipped without resizing to avoid zoom effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <Image src={beforeUrl} alt="Before" fill className="object-cover" />
        </div>
        <div
          role="separator"
          aria-orientation="vertical"
          className="absolute top-0 z-10 h-full w-0.5 bg-white"
          style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
        >
          {/* slider handle */}
        </div>
        <div
          className="absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium"
          style={{ left: `${percent}%`, transform: "translate(-50%, -50%)" }}
        >
          Drag
        </div>
        <div className="absolute left-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-semibold">Before</div>
        <div className="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-xs font-semibold">After</div>
      </div>
    </div>
  );
}


