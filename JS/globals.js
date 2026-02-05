(function () {
    const root = document.documentElement;
  
    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  
    function toggleTheme() {
      const current = root.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    }
  
    function initTheme() {
      const saved = localStorage.getItem("theme");
      if (saved) {
        applyTheme(saved);
      }
    }
  
    // expose globally
    window.toggleTheme = toggleTheme;
    window.initTheme = initTheme;
})();
  


(function () {
    
    function softReload() {
      // Reset scroll
      window.scrollTo(0, 0);
  
      // Re-run global inits
      if (typeof initTheme === "function") {
        initTheme();
      }
    }
  
    window.softReload = softReload;
  })();
  