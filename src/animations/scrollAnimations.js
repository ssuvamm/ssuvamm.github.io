import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Example of a reusable animation function (we will add more later)
export const fadeIn = (element, delay = 0) => {
  gsap.fromTo(element,
    { autoAlpha: 0, y: 20 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
        once: true, // Only animate once
      }
    }
  );
};

// You can add more generic animation functions here later
// e.g., slideIn, scaleUp, staggerFadeIn, etc.

console.log('GSAP Animation module loaded');
