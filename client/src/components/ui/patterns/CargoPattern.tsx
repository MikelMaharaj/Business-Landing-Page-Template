import { motion } from "framer-motion";

export default function CargoPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 mix-blend-multiply" />

      {/* Cargo ship silhouette */}
      <motion.svg
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-64 text-gray-500"
        viewBox="0 0 800 200"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M0,150 L100,150 L120,130 L600,130 L620,150 L800,150 L800,200 L0,200 Z"
          fill="currentColor"
        />
        {/* Container stack */}
        <g transform="translate(200, 50)">
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 60}
                y={row * 25}
                width="50"
                height="20"
                fill="currentColor"
                opacity="0.8"
              />
            ))
          )}
        </g>
      </motion.svg>

      {/* Container grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-800/40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="cargo-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="none" strokeWidth="1" />
            <rect width="20" height="20" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cargo-grid)" />
      </svg>
    </div>
  );
}