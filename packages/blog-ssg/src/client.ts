import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import Alpine from 'alpinejs';
import './style.css';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

declare module 'alpinejs' {
  interface DefaultLayoutStore {
    isMobileNavOpen: boolean;
    closeMobileNav(): void;
    openMobileNav(): void;
  }

  interface Stores {
    defaultLayout: DefaultLayoutStore;
  }
}

document.addEventListener('alpine:init', function () {
  Alpine.store('defaultLayout', {
    isMobileNavOpen: false,
    closeMobileNav() {
      this.isMobileNavOpen = false;
    },
    openMobileNav() {
      this.isMobileNavOpen = true;
    },
  });
});

window.addEventListener('resize', function () {
  const width = document.documentElement.clientWidth;
  const defaultLayout = Alpine.store('defaultLayout');
  if (width < 1024 || !defaultLayout.isMobileNavOpen) {
    return;
  }

  Alpine.store('defaultLayout').closeMobileNav();
});

window.Alpine = Alpine;
Alpine.start();
