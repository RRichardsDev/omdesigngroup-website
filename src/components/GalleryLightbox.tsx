"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryLightboxProps = {
  images: string[];
  startIndex?: number;
  open?: boolean;
  onClose?: () => void;
};

export default function GalleryLightbox({ images, startIndex = 0, open: controlledOpen, onClose }: GalleryLightboxProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const [index, setIndex] = useState(startIndex);

  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  return (
    <Lightbox
      open={open}
      close={() => {
        if (onClose) onClose();
        if (!isControlled) setUncontrolledOpen(false);
      }}
      slides={images.map((src) => ({ src }))}
      index={index}
      on={{ view: ({ index: i }) => setIndex(i) }}
      carousel={{ finite: false }}
      animation={{ fade: 250 }}
      controller={{ closeOnBackdropClick: true }}
      render={{ buttonPrev: undefined, buttonNext: undefined }}
    />
  );
}


