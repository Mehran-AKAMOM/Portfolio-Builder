import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const POINTS = [
  { lat: -1.29, lng: 36.82, label: "Nairobi · Kenya", city: "Nairobi" },
  { lat: 19.07, lng: 72.87, label: "Mumbai · India", city: "Mumbai" },
  { lat: -4.32, lng: 15.32, label: "Kinshasa · Congo", city: "Kinshasa" },
];

const ARCS = [
  { startLat: -1.29, startLng: 36.82, endLat: 19.07, endLng: 72.87 },
  { startLat: 19.07, startLng: 72.87, endLat: -4.32, endLng: 15.32 },
  { startLat: -4.32, startLng: 15.32, endLat: -1.29, endLng: 36.82 },
];

export function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(500);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setSize(Math.min(w, window.innerWidth < 768 ? 320 : 520));
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !globeRef.current) return;

    let GlobeGL: any;
    let globeInstance: any;

    import("react-globe.gl").then((mod) => {
      GlobeGL = mod.default;

      globeInstance = GlobeGL({ animateIn: true })(globeRef.current!);

      globeInstance
        .width(size)
        .height(size)
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl("")
        .atmosphereColor("#C9A84C")
        .atmosphereAltitude(0.12)
        // Globe surface colour via custom shader-style hex
        .customLayerData([{}])
        .customThreeObject(() => {
          const THREE = (globeInstance as any).scene().constructor;
          return null;
        })
        // Points
        .pointsData(POINTS)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor(() => "#C9A84C")
        .pointAltitude(0.015)
        .pointRadius(0.6)
        .pointLabel("label")
        // Arcs
        .arcsData(ARCS)
        .arcStartLat("startLat")
        .arcStartLng("startLng")
        .arcEndLat("endLat")
        .arcEndLng("endLng")
        .arcColor(() => ["#FFD700", "#C9A84C"])
        .arcAltitude(0.4)
        .arcStroke(1.5)
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        // Rotation
        .enablePointerInteraction(true);

      // Set initial dark globe colour
      const scene = globeInstance.scene();
      scene.background = null;

      // Slow auto-rotation
      (globeInstance as any).controls().autoRotate = true;
      (globeInstance as any).controls().autoRotateSpeed = 0.5;
      (globeInstance as any).controls().enableZoom = false;

      // Point camera at Africa initially
      globeInstance.pointOfView({ lat: 0, lng: 25, altitude: 2.2 }, 0);
    });

    return () => {
      if (globeRef.current) {
        globeRef.current.innerHTML = "";
      }
    };
  }, [mounted, size]);

  return (
    <section id="globe" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Globe */}
          <div ref={containerRef} className="w-full max-w-2xl flex justify-center">
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: size,
                height: size,
                background: "radial-gradient(circle at 40% 40%, #0D1B2A 60%, #050D18 100%)",
                boxShadow: "0 0 80px rgba(201,168,76,0.15), 0 0 160px rgba(74,144,217,0.08)",
              }}
            >
              <div ref={globeRef} />
            </div>
          </div>

          {/* City cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              { city: "Nairobi", country: "Kenya", flag: "🇰🇪", role: "Home base · Aga Khan Academy" },
              { city: "Mumbai", country: "India", flag: "🇮🇳", role: "Heritage & cultural roots" },
              { city: "Kinshasa", country: "Congo", flag: "🇨🇩", role: "American School of Kinshasa" },
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
        </motion.div>
      </div>
    </section>
  );
}
