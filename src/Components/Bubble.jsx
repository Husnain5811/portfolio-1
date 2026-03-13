import React, { useEffect, useState } from "react";

const Bubbles = () => {
  const [active, setActive] = useState(true);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (!active) {
      setBubbles([]);
      return;
    }

    const minCount = 20;
    const maxCount = 60;
    const minSize = 7;
    const maxSize = 12;

    const count = minCount + Math.floor(Math.random() * (maxCount - minCount + 1));
    const newBubbles = [];

    for (let i = 0; i < count; i++) {
      newBubbles.push({
        id: i,
        left: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        delay: Math.random() * 15,
        speed: 3 + Math.random() * 8,
        blur: Math.random() * 3,
      });
    }

    setBubbles(newBubbles);
  }, [active]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-t">
      {/* Bubble Elements */}
      <div className="relative w-full h-full">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute bottom-0 opacity-0 animate-[bubbleRise_linear_infinite]"
            style={{
              left: `${b.left}%`,
              animationDuration: `${b.speed}s`,
              animationDelay: `${b.delay}s`,
              filter: `blur(${b.blur}px)`,
            }}
          >
            <div
              className="rounded-full border border-white/50 bg-white/25 animate-[bubbleWobble_0.4s_linear_infinite]"
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {/* <button
        onClick={() => setActive(!active)}
        className="absolute top-3 right-3 px-3 py-2 text-sm font-medium text-gray-800 bg-white/50 hover:bg-white/75 rounded-lg transition"
      >
        {active ? "Bubbles Off" : "Bubbles On"}
      </button> */}

      {/* Keyframe animations */}
      <style>
        {`
          @keyframes bubbleRise {
            0% { bottom: 0; opacity: 0; }
            5% { bottom: 0; opacity: 1; }
            99% { opacity: 1; }
            100% { bottom: 100%; opacity: 0; }
          }
          @keyframes bubbleWobble {
            0% { margin-left: 0; }
            50% { margin-left: 2px; }
            100% { margin-left: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Bubbles;
