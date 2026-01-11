import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once to avoid SSR issues
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export * from 'gsap';
export { ScrollTrigger };
