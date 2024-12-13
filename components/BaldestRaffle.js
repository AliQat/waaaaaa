"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BaldestRaffle = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const tickets = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 800 - 400,
    y: Math.random() * 800 - 400,
    rotation: Math.random() * 360
  }));

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
      {!isAnimating && (
        <button
          onClick={handleClick}
          className="px-6 py-3 text-xl font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Wanna know who is baldest?
        </button>
      )}

      <AnimatePresence>
        {isAnimating && !showResult && (
          <>
            {tickets.map((ticket) => (
              <motion.div
                key={ticket.id}
                className="absolute bg-white p-4 rounded-lg shadow-lg"
                initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 1, 0],
                  x: ticket.x,
                  y: ticket.y,
                  rotate: ticket.rotation,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
              >
                RAFFLE TICKET
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              duration: 0.8,
              bounce: 0.5
            }}
            className="bg-white p-8 rounded-lg shadow-2xl"
          >
            <div className="text-6xl font-bold text-purple-600">EREN</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BaldestRaffle;