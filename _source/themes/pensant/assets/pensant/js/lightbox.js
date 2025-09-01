/**
 * Lightbox implementation inspired by Squarespace's image gallery
 * Provides fullscreen image viewing with navigation controls
 */

class Lightbox {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.lightboxEl = null;
    this.imageEl = null;
    this.loaderEl = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.closeBtn = null;
    
    this.init();
  }

  init() {
    this.createLightboxHTML();
    this.bindEvents();
    this.scanImages();
  }

  createLightboxHTML() {
    // Create lightbox container
    this.lightboxEl = document.createElement('div');
    this.lightboxEl.className = 'lightbox-overlay';
    this.lightboxEl.innerHTML = `
      <div class="lightbox-container">
        <button class="lightbox-close" aria-label="Close lightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="lightbox-content">
          <div class="lightbox-image-container">
            <div class="lightbox-loader">
              <div class="loader-spinner"></div>
            </div>
            <img class="lightbox-image" alt="" />
          </div>
          
          <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button class="lightbox-nav lightbox-next" aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(this.lightboxEl);

    // Get references to elements
    this.imageEl = this.lightboxEl.querySelector('.lightbox-image');
    this.loaderEl = this.lightboxEl.querySelector('.lightbox-loader');
    this.prevBtn = this.lightboxEl.querySelector('.lightbox-prev');
    this.nextBtn = this.lightboxEl.querySelector('.lightbox-next');
    this.closeBtn = this.lightboxEl.querySelector(".lightbox-close");
  }

  bindEvents() {
    // Close events
    this.closeBtn.addEventListener('click', () => this.close());
    this.lightboxEl.addEventListener('click', (e) => {
      if (e.target === this.lightboxEl || e.target.closest('.lightbox-container') === null) {
        this.close();
      }
    });

    // Navigation events
    this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prev();
    });
    
    this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.next();
    });

    // Left and right side click areas for navigation
    const contentArea = this.lightboxEl.querySelector('.lightbox-content');
    contentArea.addEventListener('click', (e) => {
      // Only handle clicks on the content area or image container, not on buttons
      const isContentClick =
        e.target === contentArea ||
        e.target.closest(".lightbox-image-container") ===
          e.target.closest(".lightbox-image-container");

      if (!isContentClick || e.target === this.imageEl) {
        return;
      }

      // Stop propagation to prevent closing the lightbox
      e.stopPropagation();

      // Calculate click position relative to the content area
      const rect = contentArea.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const centerX = rect.width / 2;

      // If clicked on left side, go to previous image
      // If clicked on right side, go to next image
      if (clickX < centerX) {
        this.prev();
      } else {
        this.next();
      }
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.next();
          break;
      }
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    this.lightboxEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    this.lightboxEl.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
    }, { passive: true });

    // Image load events
    this.imageEl.addEventListener('load', () => {
      this.hideLoader();
    });

    this.imageEl.addEventListener('error', () => {
      this.hideLoader();
      console.error('Failed to load image');
    });
  }

  handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY) {
    const minSwipeDistance = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = Math.abs(touchStartY - touchEndY);
    
    // Only handle horizontal swipes (not vertical scrolls)
    if (Math.abs(diffX) > minSwipeDistance && diffY < 100) {
      if (diffX > 0) {
        this.next(); // Swipe left - next image
      } else {
        this.prev(); // Swipe right - previous image
      }
    }
  }

  scanImages() {
    // Find all images with lightbox class
    const lightboxImages = document.querySelectorAll("img.lightbox");

    lightboxImages.forEach((img, index) => {
      this.addImageToLightbox(img, index);
    });
  }

  addImageToLightbox(img, index) {
    // Add click event
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      this.openWithImage(img, index);
    });

    // Add image to collection
    this.images.push({
      src: img.src,
      alt: img.alt || img.title || '',
      caption: img.title || img.alt || '',
      element: img
    });
  }

  openWithImage(imgElement, index) {
    // Find the correct index in our images array
    const actualIndex = this.images.findIndex(img => img.element === imgElement);
    this.currentIndex = actualIndex !== -1 ? actualIndex : 0;
    this.open();
  }

  open() {
    this.isOpen = true;
    this.lightboxEl.classList.add('lightbox-active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
    
    // Update overlay data attribute for styling
    this.lightboxEl.setAttribute('data-single-image', this.images.length <= 1 ? 'true' : 'false');
    
    this.loadCurrentImage();
    this.updateNavigation();
    
    // Focus management for accessibility
    this.closeBtn.focus();
  }

  close() {
    this.isOpen = false;
    this.lightboxEl.classList.remove('lightbox-active');
    document.body.style.overflow = '';
    document.body.classList.remove('lightbox-open');
    
    // Return focus to the image that was clicked
    if (this.images[this.currentIndex] && this.images[this.currentIndex].element) {
      this.images[this.currentIndex].element.focus();
    }
  }

  prev() {
    if (this.images.length <= 1) return;
    
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    this.loadCurrentImage();
    this.updateNavigation();
  }

  next() {
    if (this.images.length <= 1) return;
    
    this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
    this.loadCurrentImage();
    this.updateNavigation();
  }

  loadCurrentImage() {
    if (!this.images[this.currentIndex]) return;
    
    this.showLoader();
    const currentImage = this.images[this.currentIndex];
    
    // Create new image to preload
    const img = new Image();
    img.onload = () => {
      this.imageEl.src = currentImage.src;
      this.imageEl.alt = currentImage.alt;
    };
    img.onerror = () => {
      this.hideLoader();
      console.error('Failed to load image:', currentImage.src);
    };
    
    img.src = currentImage.src;
  }

  showLoader() {
    this.loaderEl.style.display = 'flex';
    this.imageEl.style.opacity = '0';
  }

  hideLoader() {
    this.loaderEl.style.display = 'none';
    this.imageEl.style.opacity = '1';
  }

  updateNavigation() {
    if (this.images.length <= 1) {
      this.prevBtn.style.display = "none";
      this.nextBtn.style.display = "none";
    } else {
      this.prevBtn.style.display = "flex";
      this.nextBtn.style.display = "flex";
    }
  }
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Lightbox();
});

// Export for potential external usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Lightbox;
}
