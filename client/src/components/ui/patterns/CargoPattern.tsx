import { motion } from "framer-motion";

export default function CargoPattern() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Minimal gradient overlay to ensure visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

      {/* Simplified cargo ship */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-[70vh]"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Main ship body */}
        <path
          d="M100,400 L300,400 L350,350 L800,350 L850,400 L900,400 L900,600 L100,600 Z"
          className="fill-gray-400/80"
        />

        {/* Containers - simplified but visible */}
        <g>
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <rect
                key={`container-${row}-${col}`}
                x={350 + col * 80}
                y={200 + row * 50}
                width="70"
                height="40"
                className="fill-gray-300/90"
                rx="4"
              />
            ))
          )}
        </g>

        {/* Bridge/control tower */}
        <rect
          x="750"
          y="150"
          width="80"
          height="200"
          className="fill-gray-400/90"
        />
      </motion.svg>
    </div>
  );
}