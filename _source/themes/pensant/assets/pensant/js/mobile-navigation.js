/**
 * Mobile Navigation Drawer
 * 移动端导航抽屉功能
 */
(function() {
  'use strict';

  /**
   * 初始化移动端导航
   */
  function initMobileNav() {
    // 获取DOM元素
    var toggle = document.getElementById('menuToggle');
    var closeBtn = document.getElementById('menuClose');
    var drawer = document.getElementById('mobileDrawer');
    var overlay = document.getElementById('drawerOverlay');

    // 检查必需元素是否存在
    if (!toggle || !drawer) {
      console.warn('Mobile navigation elements not found');
      return;
    }

    /**
     * 打开抽屉
     */
    function openDrawer() {
      drawer.style.transform = 'translateX(0)';
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';
      document.documentElement.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
    }

    /**
     * 关闭抽屉
     */
    function closeDrawer() {
      drawer.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      document.documentElement.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }

    // 事件监听
    toggle.addEventListener('click', openDrawer);
    overlay.addEventListener('click', closeDrawer);
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // ESC键关闭抽屉
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });

    console.log('Mobile navigation initialized');
  }

  // 等待DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }

})();
