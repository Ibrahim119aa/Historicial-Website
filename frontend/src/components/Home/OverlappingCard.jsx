import React, { useState } from "react";
import { motion } from "framer-motion";

const OverlappingCard = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(null);



  return (
    <div className="flex justify-center mt-2">
      <div className="relative w-full max-w-[1250px] h-[550px] flex justify-center items-center">
        {cards && cards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                scale: isActive ? 1.2 : 1,
                x: index * 250,
              }}
              style={{
                left: 0,
                zIndex: isActive ? 100 : index,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10, mass: 0.5 }}
              className="absolute w-[32rem] h-[32rem] bg-white rounded-xl shadow-xl border border-gray-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >

              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <span className="text-sm">{card.description}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OverlappingCard;
