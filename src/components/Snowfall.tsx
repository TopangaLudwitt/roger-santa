"use client";
import { useEffect, useState } from "react";

export default function Snowfall() {
  const [flakes, setFlakes] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const f = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 0.6 + Math.random() * 0.8,
    }));
    setFlakes(f);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {flakes.map((f) => (
        <div key={f.id} className="snowflake"
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            fontSize: `${f.size}rem`,
          }}>
          ❄
        </div>
      ))}
    </div>
  );
}
