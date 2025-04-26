import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash, otherwise let the browser handle scrolling to the hash element
    // If hash exists, scroll to the element after a short delay to allow rendering
    if (hash) {
      // Use setTimeout to queue the scroll operation after the current render cycle
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Use 'smooth' for smooth scrolling
        } else {
          // Fallback: If element not found (e.g., during initial load), scroll to top
          window.scrollTo(0, 0);
        }
      }, 0); // 0ms delay is often enough
    } else {
      // If no hash, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Depend on both pathname and hash

  return null;
}
