'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  id: number;
  themeKey: string;
  content: React.ReactNode;
};

type CardStackProps = {
  items: Card[];
  offset?: number;
  speed?: number;
};

export const CardStack = ({ items, offset = 10, speed = 5 }: CardStackProps) => {
  const CARD_OFFSET = offset;
  const SPEED = speed * 1000;

  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, [SPEED]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, SPEED);
  };

  return (
    <>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute size-full rounded-[3rem] flex items-center !p-4"
            style={{
              transformOrigin: 'bottom center',
              background: `linear-gradient(45deg, var(--${card.themeKey}-1100) 0%, var(--${card.themeKey}-900) 100%)`,
            }}
            animate={{
              top: (index * CARD_OFFSET) / 2,
              scale: 1 - index * 0.055,
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
