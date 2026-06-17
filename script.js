/* =========================================================
   SF BEAUTY Proposal V6
   Interaction: tabs, demo switcher, subtle presentation effects
   ========================================================= */

(function () {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function activateTab(tabId) {
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === tabId;
      panel.classList.toggle("active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  tabButtons.forEach((button) => {
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab");

    button.addEventListener("click", () => {
      activateTab(button.dataset.tab);
    });
  });

  // AI Demo tool switcher
  const demoTabs = document.querySelectorAll(".demo-tab");
  const demoCards = document.querySelectorAll(".demo-card");

  function activateDemo(demoId) {
    demoTabs.forEach((btn) => {
      const isActive = btn.dataset.demo === demoId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    demoCards.forEach((card) => {
      const isActive = card.id === "demo-" + demoId;
      card.classList.toggle("active", isActive);
      card.setAttribute("aria-hidden", String(!isActive));
    });
  }

  demoTabs.forEach((button) => {
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab");

    button.addEventListener("click", () => {
      activateDemo(button.dataset.demo);
    });
  });

  // Keyboard support for top tabs
  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isTopTab = activeElement && activeElement.classList.contains("tab-btn");
    const isDemoTab = activeElement && activeElement.classList.contains("demo-tab");

    if (!isTopTab && !isDemoTab) return;
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

    event.preventDefault();

    const list = isTopTab ? Array.from(tabButtons) : Array.from(demoTabs);
    const currentIndex = list.indexOf(activeElement);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + list.length) % list.length;
    list[nextIndex].focus();
    list[nextIndex].click();
  });

  // Subtle reveal animation for visible content
  const revealItems = document.querySelectorAll(
    ".section-block, .statement-card, .pillar-card, .thread-card, .journey-step, .demo-layout, .revenue-node, .impact-grid article, .strategy-map"
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal-item");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  // Add active states on load
  const initialTab = document.querySelector(".tab-btn.active");
  if (initialTab) {
    activateTab(initialTab.dataset.tab);
  }

  const initialDemo = document.querySelector(".demo-tab.active");
  if (initialDemo) {
    activateDemo(initialDemo.dataset.demo);
  }
})();
