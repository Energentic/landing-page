import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** JS-based smooth scroll — works even when the browser/OS disables smooth scrolling */
export function smoothScrollTo(targetY: number, duration = 600) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (diff === 0) return;
  let start: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
  }

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const NAV_HEIGHT = 80;

export function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    smoothScrollTo(top);
  }
}

export function scrollToTop() {
  smoothScrollTo(0);
}
