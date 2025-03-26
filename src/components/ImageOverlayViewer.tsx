import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageOverlayViewer = () => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  // Scroll lock
  useEffect(() => {
    if (openImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openImage]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenImage(null);
      }
    };

    if (openImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openImage]);

  return (
    <div>
      {/* Thumbnail */}
      <Image
        src="/thumb.jpg"
        alt="Thumbnail"
        width={200}
        height={200}
        onClick={() => setOpenImage('/full.jpg')}
        className="cursor-pointer"
      />

      {/* Overlay */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={(e) => {
              e.stopPropagation(); // prevent bubbling to overlay
              setOpenImage(null);
            }}
          >
            <span className="text-2xl font-bold">×</span>
          </button>

          {/* Full image */}
          <img
            src={openImage}
            alt="Full-size"
            className="w-full max-w-[90%] h-auto object-contain"
            onClick={(e) => e.stopPropagation()} // allow clicking on image without closing
          />
        </div>
      )}
    </div>
  );
};

export default ImageOverlayViewer;
