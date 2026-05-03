import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/*
  ─────────────────────────────────────────────
  HOW TO ADD YOUR OWN PHOTOS
  ─────────────────────────────────────────────
  1. Drop your image files into:  artifacts/portfolio/src/assets/
  2. Import them at the top of this file, e.g.:
       import myPhoto from "@/assets/my-photo.jpg";
  3. Add an entry to the PHOTOS array below:
       { src: myPhoto, caption: "Your caption" }
  You can add as many as you like — the carousel grows automatically.
  ─────────────────────────────────────────────
*/

const PHOTOS: { src: string; caption: string }[] = [
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80", caption: "Add your photo here" },
  { src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80", caption: "Add your photo here" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const SPEED = 0.6; // px per frame

  // Duplicate photos for seamless infinite loop
  const items = [...PHOTOS, ...PHOTOS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!paused) {
        posRef.current += SPEED;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [paused]);

  const open = (i: number) => { setPaused(true); setSelected(i % PHOTOS.length); };
  const close = () => { setSelected(null); setPaused(false); };
  const prev = () => setSelected((s) => s !== null ? (s - 1 + PHOTOS.length) % PHOTOS.length : null);
  const next = () => setSelected((s) => s !== null ? (s + 1) % PHOTOS.length : null);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Gallery</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">Click any photo to view full size.</p>
            <button
              onClick={() => setPaused((p) => !p)}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 rounded-full px-3 py-1.5"
              data-testid="button-gallery-pause"
            >
              {paused ? <Play size={12} /> : <Pause size={12} />}
              {paused ? "Resume" : "Pause"}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {items.map((photo, i) => (
            <div
              key={i}
              className="relative shrink-0 cursor-pointer rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
              style={{ width: 320, height: 220 }}
              onClick={() => open(i)}
              data-testid={`gallery-photo-${i}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
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
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={close}
              data-testid="button-lightbox-close"
            >
              <X size={22} />
            </button>
            <button
              className="absolute left-4 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.22 }}
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
