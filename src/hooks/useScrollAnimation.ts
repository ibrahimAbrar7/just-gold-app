import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationConfig {
  offset?: [string, string];
}

export const useScrollAnimation = (config: ScrollAnimationConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { offset = ["start end", "end start"] } = config;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  
  return { ref, scrollYProgress };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useFadeIn = (value: MotionValue<number>) => {
  return useTransform(value, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
};

export const useScale = (value: MotionValue<number>, from: number = 0.8, to: number = 1) => {
  return useTransform(value, [0, 0.5], [from, to]);
};
