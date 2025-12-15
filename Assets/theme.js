// ==================== Theme Management ====================

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Theme Toggle function (called from both pages)
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// Detect system preference and initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // If user has already chosen, use that
  const existing = localStorage.getItem("theme");
  if (existing) {
    initTheme();
    return;
  }

  // If no choice yet, respect system preference
  if (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    initTheme();
  }
});

// Listen for theme changes across tabs/windows
window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    document.documentElement.setAttribute(
      "data-theme",
      event.newValue || "light"
    );
  }
});
