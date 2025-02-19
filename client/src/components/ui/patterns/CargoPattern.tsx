import { motion } from "framer-motion";

export default function CargoPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Lighter gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

      {/* Cargo ship silhouette */}
      <motion.svg
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.8 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-96 text-gray-300"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Ship hull */}
        <path
          d="M50,300 L200,300 L250,250 L900,250 L950,300 L1150,300 L1150,400 L50,400 Z"
          fill="currentColor"
          opacity="0.9"
        />

        {/* Ship cabin */}
        <path
          d="M800,150 L900,150 L900,250 L800,250 Z"
          fill="currentColor"
          opacity="0.85"
        />

        {/* Container stacks - made larger and more visible */}
        <g transform="translate(300, 50)">
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 80}
                y={row * 40}
                width="70"
                height="35"
                fill="currentColor"
                opacity="0.95"
                rx="2"
              />
            ))
          )}
        </g>

        {/* Crane structure */}
        <path
          d="M700,50 L750,50 L750,150 L700,150 Z M720,30 L730,30 L730,250 L720,250 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </motion.svg>

      {/* Container grid pattern - made more visible */}
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-500/20"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="cargo-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect width="60" height="60" fill="none" strokeWidth="1.5" />
            <rect width="30" height="30" fill="none" strokeWidth="1.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cargo-grid)" />
      </svg>
    </div>
  );
}