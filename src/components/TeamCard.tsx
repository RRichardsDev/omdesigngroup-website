"use client";

import Image from "next/image";
import { useState, KeyboardEvent, MouseEvent } from "react";

type Bio = string | string[];

export default function TeamCard({
  name,
  role,
  bio,
  imageSrc,
}: {
  name: string;
  role: string;
  bio: Bio;
  imageSrc: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((v) => !v);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOpen();
    }
  };

  const stop = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-black/10"
      role="button"
      tabIndex={0}
      onClick={toggleOpen}
      onKeyDown={handleKeyDown}
      aria-pressed={isOpen}
      aria-label={`${name} – ${role}`}
    >
      <div className="relative aspect-square">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg">{name}</h3>
        <p className="text-accent text-sm font-semibold">{role}</p>
      </div>

      <div
        className={
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 " +
          (isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto")
        }
        onClick={stop}
      >
        <button
          type="button"
          aria-label="Close bio"
          className="absolute right-3 top-3 rounded-full bg-white/10 p-1 text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex h-full flex-col p-4 text-white">
          <div>
            <h3 className="text-lg font-semibold leading-tight py-2">{name}</h3>
            <p className="text-accent/90 text-sm font-semibold bg-white rounded-[15px] p-[3px] w-min whitespace-nowrap">{role}</p>
          </div>
          <div className="mt-3 grow overflow-y-auto pr-2 space-y-3 no-scrollbar">
            {Array.isArray(bio) ? (
              bio.map((paragraph, idx) => (
                <p key={idx} className="text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-sm leading-relaxed">{bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


