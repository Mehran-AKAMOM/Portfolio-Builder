import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Orthographic projection — central view: lng=40°, lat=5°
const CX = 220;
const CY = 220;
const R = 190;

// Projected city positions (pre-calculated orthographic projection)
const CITIES = [
  { x: 209, y: 244, label: "Nairobi", sub: "Kenya", flag: "🇰🇪" },
  { x: 320, y: 168, label: "Mumbai", sub: "India", flag: "🇮🇳" },
  { x: 137, y: 252, label: "Kinshasa", sub: "Congo", flag: "🇨🇩" },
];

// Quadratic bezier arcs between the cities — control points arc outward
const ARCS = [
  { d: "M 209 244 Q 282 115 320 168", delay: 0 },      // Nairobi → Mumbai
  { d: "M 320 168 Q 178  62 137 252", delay: 0.6 },    // Mumbai → Kinshasa
  { d: "M 137 252 Q 148 285 209 244", delay: 1.2 },    // Kinshasa → Nairobi
];

// Latitude lines (ellipses at ~0°, ±30°, ±60°)
const LAT_LINES = [
  { ry: 8,  cy: CY },          // equator (flattened because of oblique view)
  { ry: 10, cy: CY - 70 },     // ~30° N
  { ry: 10, cy: CY + 70 },     // ~30° S
  { ry: 7,  cy: CY - 130 },    // ~60° N
  { ry: 7,  cy: CY + 130 },    // ~60° S
];

function computeRxForLat(cy: number): number {
  const dy = Math.abs(cy - CY);
  return Math.sqrt(Math.max(0, R * R - dy * dy));
}

export function Globe() {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  return (
    <section id="globe" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            A World of Connections
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">Three continents. One vision.</p>
        </motion.div>

        <div className="flex flex-col items-center gap-10">
          {/* SVG Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-sm sm:max-w-md"
          >
            <svg
              viewBox="0 0 440 440"
              className="w-full h-auto drop-shadow-[0_0_60px_rgba(201,168,76,0.18)]"
              aria-label="Globe showing connections between Nairobi, Mumbai, and Kinshasa"
            >
              <defs>
                {/* Globe clip */}
                <clipPath id="globe-clip">
                  <circle cx={CX} cy={CY} r={R} />
                </clipPath>
                {/* Radial background gradient */}
                <radialGradient id="globe-bg" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#122440" />
                  <stop offset="60%" stopColor="#0D1B2A" />
                  <stop offset="100%" stopColor="#060D14" />
                </radialGradient>
                {/* Arc glow filter */}
                <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                {/* City dot glow */}
                <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                {/* Atmosphere gradient */}
                <radialGradient id="atmos" cx="50%" cy="50%" r="50%">
                  <stop offset="85%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.25" />
                </radialGradient>
              </defs>

              {/* Atmosphere ring */}
              <circle cx={CX} cy={CY} r={R + 14} fill="url(#atmos)" />

              {/* Globe background */}
              <circle cx={CX} cy={CY} r={R} fill="url(#globe-bg)" />

              {/* Grid lines — clipped to globe */}
              <g clipPath="url(#globe-clip)" opacity="0.18" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeDasharray="3 4">
                {/* Latitude lines */}
                {LAT_LINES.map((l, i) => {
                  const rx = computeRxForLat(l.cy);
                  return rx > 5 ? (
                    <ellipse key={`lat-${i}`} cx={CX} cy={l.cy} rx={rx} ry={l.ry} />
                  ) : null;
                })}
                {/* Longitude lines — narrow vertical ellipses at rotations */}
                {[0, 30, 60, 90, 120, 150].map((deg) => (
                  <ellipse
                    key={`lng-${deg}`}
                    cx={CX} cy={CY}
                    rx={28} ry={R}
                    transform={`rotate(${deg} ${CX} ${CY})`}
                  />
                ))}
              </g>

              {/* Globe edge border */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.35" />

              {/* Animated arcs */}
              {ARCS.map((arc, i) => (
                <g key={i} filter="url(#arc-glow)" clipPath="url(#globe-clip)">
                  {/* Shadow/thick base */}
                  <motion.path
                    d={arc.d}
                    fill="none"
                    stroke="#FFD700"
                    strokeOpacity={0.12}
                    strokeWidth={6}
                    strokeLinecap="round"
                  />
                  {/* Animated travelling light */}
                  <motion.path
                    d={arc.d}
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeOpacity={0.9}
                    initial={{ pathLength: 0, pathOffset: 0 }}
                    animate={{ pathLength: 0.35, pathOffset: [0, 1] }}
                    transition={{
                      pathLength: { duration: 0.01 },
                      pathOffset: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: arc.delay,
                      },
                    }}
                  />
                </g>
              ))}

              {/* City dots */}
              {CITIES.map((city, i) => (
                <g key={i} filter="url(#dot-glow)">
                  {/* Outer pulse ring */}
                  <motion.circle
                    cx={city.x} cy={city.y} r={10}
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth={1.5}
                    strokeOpacity={0.6}
                    initial={{ scale: 0.6, opacity: 0.8 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 0.5,
                    }}
                    style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                  />
                  {/* Inner dot */}
                  <circle cx={city.x} cy={city.y} r={5} fill="#C9A84C" />
                  <circle cx={city.x} cy={city.y} r={3} fill="#FFE066" />
                </g>
              ))}

              {/* City labels */}
              {CITIES.map((city, i) => {
                const offsetX = i === 1 ? 12 : i === 2 ? -12 : 12;
                const anchor = i === 2 ? "end" : "start";
                return (
                  <g key={`label-${i}`}>
                    <text
                      x={city.x + offsetX} y={city.y - 8}
                      fontSize="11" fontWeight="700" fill="#FFFFFF" textAnchor={anchor}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {city.label}
                    </text>
                    <text
                      x={city.x + offsetX} y={city.y + 5}
                      fontSize="9" fill="#C9A84C" textAnchor={anchor}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {city.sub}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* City info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              { city: "Nairobi", country: "Kenya", flag: "🇰🇪", role: "Home base · Aga Khan Academy" },
              { city: "Mumbai", country: "India", flag: "🇮🇳", role: "Heritage & cultural roots" },
              { city: "Kinshasa", country: "Congo", flag: "🇨🇩", role: "TASOK · Middle school years" },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card/60 border border-border hover:border-primary/50 rounded-xl p-4 flex items-start gap-3 transition-colors"
              >
                <span className="text-2xl">{loc.flag}</span>
                <div>
                  <p className="font-bold text-foreground text-sm">{loc.city}, {loc.country}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{loc.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
