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
  noBg?: boolean;
  containerClass?: string;
  scaleFactor?: number;
};

export const CardStack = ({ items, offset = 10, speed = 5, noBg = false, scaleFactor = 0.055, containerClass }: CardStackProps) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;
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
            className={containerClass}
            style={{
              transformOrigin: 'bottom center',
              background: noBg ? 'transparent' : `linear-gradient(45deg, var(--${card.themeKey}-1100) 0%, var(--${card.themeKey}-900) 100%)`,
            }}
            animate={{
              top: (index * CARD_OFFSET) / 2,
              scale: 1 - index * SCALE_FACTOR,
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
