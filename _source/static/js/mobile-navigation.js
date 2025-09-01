/**
 * Mobile Navigation Drawer
 * Handles opening/closing of mobile navigation drawer
 */
(function() {
  'use strict';
  
  function initMobileNavigation() {
    // Get DOM elements
    var toggle = document.getElementById('menuToggle');
    var closeBtn = document.getElementById('menuClose');
    var drawer = document.getElementById('mobileDrawer');
    var overlay = document.getElementById('drawerOverlay');
    
    // Early return if elements don't exist
    if (!toggle || !drawer || !overlay) {
      console.warn('Mobile navigation elements not found');
      return;
    }
    
    /**
     * Open mobile drawer
     */
    function openDrawer() {
      drawer.style.transform = 'translateX(0)';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      document.documentElement.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
    }
    
    /**
     * Close mobile drawer
     */
    function closeDrawer() {
      drawer.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      document.documentElement.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }
    
    // Event listeners
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      openDrawer();
    });
    
    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      closeDrawer();
    });
    
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeDrawer();
      });
    }
    
    // Close drawer on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });
    
    console.log('Mobile navigation initialized successfully');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNavigation);
  } else {
    initMobileNavigation();
  }
})();
