"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import {
  galleryCategories,
  galleryImages,
  GalleryCategory,
  GalleryImage,
} from "@/data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="gallery" className="section-scroll-offset py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Little Moments, Big Memories"
          subtitle="A glimpse into the everyday joy, learning and celebrations at Shiksha Play & Learn."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                activeCategory === category
                  ? "bg-tangerine-500 text-white shadow-soft"
                  : "bg-white text-ink-soft hover:bg-sky-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <PhotoPlaceholder
                src={image.src}
                alt={image.alt}
                gradient={`${image.colorFrom} ${image.colorTo}`}
                className="aspect-square w-full"
                showCaption={false}
              />
            </button>
          ))}
        </div>
      </Container>

      {lightboxIndex !== null ? (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink"
      >
        ✕
      </button>

      {index > 0 ? (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index - 1);
          }}
          className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink sm:left-8"
        >
          ‹
        </button>
      ) : null}

      {index < images.length - 1 ? (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(index + 1);
          }}
          className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink sm:right-8"
        >
          ›
        </button>
      ) : null}

      <div
        className="w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <PhotoPlaceholder
          src={image.src}
          alt={image.alt}
          gradient={`${image.colorFrom} ${image.colorTo}`}
          className="aspect-square w-full rounded-2xl"
        />
        <p className="mt-3 text-center text-sm font-medium text-white">{image.alt}</p>
      </div>
    </div>
  );
}
