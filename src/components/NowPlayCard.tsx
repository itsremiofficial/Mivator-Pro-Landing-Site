'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  themeKey: string;
  content: React.ReactNode;
};

export const CardStack = ({ items, offset, scaleFactor }: { items: Card[]; offset?: number; scaleFactor?: number }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute size-full rounded-[3rem] flex w-full items-center !p-4"
            style={{
              transformOrigin: 'bottom center',
              background: `linear-gradient(45deg, var(--${card.themeKey}-1000) 0%, var(--${card.themeKey}) 100%)`,
            }}
            animate={{
              top: (index * CARD_OFFSET) / 2,
              scale: 1 - index * 0.05,
              zIndex: cards.length - index,
              opacity: 1 - index * 0.05,
            }}
          >
            {card.content}
          </motion.div>
        );
      })}
    </>
  );
};
