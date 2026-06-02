"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useTranslation } from "@/hooks/useTranslation";
import { galleryImageSources } from "@/data/gallery";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Modal } from "@/components/ui/Modal";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export function GallerySection() {
  const sectionRef = useGsapReveal<HTMLElement>({ stagger: 0.08 });
  const { messages } = useTranslation();
  const t = messages.gallery;
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const galleryImages = useMemo(
    () =>
      galleryImageSources.map((image) => {
        const text = t.items.find((item) => item.id === image.id);
        return {
          id: image.id,
          src: image.src,
          alt: text?.alt ?? "",
          category: text?.category ?? "",
        };
      }),
    [t.items]
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-foreground/[0.015]"
    >
      <div className="container-custom">
        <SectionTitle
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              data-reveal
              onClick={() => setSelected(image)}
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] ring-1 ring-card-border transition-all duration-400 hover:ring-primary/30 focus-ring sm:rounded-[1.5rem]"
              aria-label={`${t.openPhoto}: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 100vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left transition-transform duration-300 group-hover:translate-y-0">
                <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {image.category}
                </span>
                <p className="text-sm font-medium text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t.clickToView}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <Modal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          imageSrc={selected.src}
          alt={selected.alt}
          title={selected.category}
        />
      )}
    </section>
  );
}
