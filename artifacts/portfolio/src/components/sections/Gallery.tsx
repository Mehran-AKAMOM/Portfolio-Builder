import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";

/*
  ─────────────────────────────────────────────
  HOW TO ADD YOUR OWN PHOTOS
  ─────────────────────────────────────────────
  1. Drop your image files into:  artifacts/portfolio/src/assets/
  2. Import them at the top of this file, e.g.:
       import myPhoto from "@/assets/my-photo.jpg";
  3. Add an entry to the PHOTOS array below:
       { src: myPhoto, caption: "A caption for this photo" }
  
  You can add as many entries as you like — the grid
  expands automatically with no layout changes needed.
  ─────────────────────────────────────────────
*/

const PHOTOS: { src: string; caption: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    caption: "Add your own photo here",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    caption: "Add your own photo here",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    caption: "Add your own photo here",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    caption: "Add your own photo here",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    caption: "Add your own photo here",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    caption: "Add your own photo here",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () => setSelected((s) => (s !== null ? (s - 1 + PHOTOS.length) % PHOTOS.length : null));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % PHOTOS.length : null));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Gallery</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <ImagePlus size={15} className="text-primary" />
            Drop your photos into <code className="bg-card px-1.5 py-0.5 rounded text-xs border border-border">src/assets/</code> and add them to the PHOTOS array in Gallery.tsx to grow this section.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
              }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              onClick={() => open(i)}
              data-testid={`gallery-photo-${i}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium leading-tight">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            data-testid="gallery-lightbox"
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={close}
              data-testid="button-lightbox-close"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PHOTOS[selected].src}
                alt={PHOTOS[selected].caption}
                className="max-h-[78vh] w-full object-contain rounded-xl"
              />
              <p className="text-white/80 text-sm text-center">{PHOTOS[selected].caption}</p>
              <p className="text-white/40 text-xs">{selected + 1} / {PHOTOS.length}</p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
