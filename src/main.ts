import './style.css';
import Alpine from 'alpinejs';

// Extend window object to include Alpine
declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;

Alpine.start();
