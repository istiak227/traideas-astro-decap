(() => {
  const onReady = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  };

  onReady(() => {
    const nav = document.querySelector(".nav");
    const drawer = document.querySelector("[data-mobile-drawer]");
    const overlay = document.querySelector("[data-mobile-overlay]");
    const toggle = document.querySelector("[data-mobile-toggle]");
    const menuButtons = document.querySelectorAll("[data-menu-toggle]");
    const closeMobile = () => {
      drawer?.classList.remove("is-open");
      overlay?.classList.remove("is-open");
      nav?.classList.remove("mobile-menu-open");
      toggle?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    const setScrolled = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    toggle?.addEventListener("click", () => {
      const open = !drawer?.classList.contains("is-open");
      drawer?.classList.toggle("is-open", open);
      overlay?.classList.toggle("is-open", open);
      nav?.classList.toggle("mobile-menu-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    const setMobileGroup = (group, open) => {
      if (!group) return;
      const button = group.querySelector("[data-mobile-nav-toggle]");
      const submenu = group.querySelector(".mobile-nav-submenu");
      group.classList.toggle("open", open);
      button?.setAttribute("aria-expanded", String(open));
      if (submenu) submenu.style.maxHeight = open ? `${submenu.scrollHeight}px` : "0px";
    };

    document.querySelectorAll(".mobile-nav-group").forEach((group) => {
      setMobileGroup(group, group.classList.contains("open"));
    });

    overlay?.addEventListener("click", closeMobile);
    drawer?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-mobile-nav-toggle]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();

      const group = button.closest(".mobile-nav-group");
      const open = !group?.classList.contains("open");
      document.querySelectorAll(".mobile-nav-group.open").forEach((item) => {
        if (item !== group) setMobileGroup(item, false);
      });
      setMobileGroup(group, open);
    });
    document.querySelectorAll(".mobile-drawer a").forEach((a) => a.addEventListener("click", closeMobile));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeMobile();
      document.querySelectorAll(".mobile-nav-group.open").forEach((group) => setMobileGroup(group, true));
    });

    document.querySelectorAll("[data-current-year]").forEach((year) => {
      year.textContent = String(new Date().getFullYear());
    });

    menuButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const key = button.dataset.menuToggle;
        document.querySelectorAll(`[data-menu-panel]`).forEach((panel) => {
          const open = panel.dataset.menuPanel === key && !panel.closest(".nav-item")?.classList.contains("open");
          panel.closest(".nav-item")?.classList.toggle("open", open);
          button.setAttribute("aria-expanded", String(open));
        });
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nav-item")) {
        document.querySelectorAll(".nav-item.open").forEach((item) => item.classList.remove("open"));
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const animateCounter = (counter) => {
      if (counter.dataset.counted === "true") return;
      counter.dataset.counted = "true";

      const target = Number(counter.dataset.target || 0);
      const suffix = counter.dataset.suffix || "";
      const duration = 1800;
      const start = performance.now();

      const tick = (time) => {
        const progress = Math.min(1, (time - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        counter.innerHTML = `${value}<span class="num-suffix">${suffix}</span>`;

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const counters = document.querySelectorAll("[data-counter]");
    if (counters.length) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        });
      }, { threshold: 0.35 });

      counters.forEach((counter) => counterObserver.observe(counter));
    }

    document.querySelectorAll("[data-case-slider]").forEach((slider) => {
      const track = slider.querySelector("[data-case-track]");
      const cards = Array.from(slider.querySelectorAll(".cs-card"));
      const current = slider.querySelector("[data-case-current]");
      const progress = slider.querySelector("[data-case-progress]");
      const prev = slider.querySelector("[data-case-prev]");
      const next = slider.querySelector("[data-case-next]");
      if (!track || !cards.length) return;

      const getStep = () => {
        const card = cards[0];
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
        return card.getBoundingClientRect().width + gap;
      };

      const getIndex = () => Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / getStep())));

      const updateSlider = () => {
        const index = getIndex();
        if (current) current.textContent = String(index + 1).padStart(2, "0");
        if (progress) progress.style.width = `${((index + 1) / cards.length) * 100}%`;
        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index === cards.length - 1;
      };

      const scrollByCard = (direction) => {
        track.scrollBy({ left: direction * getStep(), behavior: "smooth" });
      };

      prev?.addEventListener("click", () => scrollByCard(-1));
      next?.addEventListener("click", () => scrollByCard(1));
      track.addEventListener("scroll", updateSlider, { passive: true });
      window.addEventListener("resize", updateSlider, { passive: true });
      updateSlider();
    });

    document.querySelectorAll("[data-filter-group]").forEach((group) => {
      const buttons = group.querySelectorAll("[data-filter]");
      const targets = document.querySelectorAll(`[data-filter-target="${group.dataset.filterGroup}"]`);
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const value = button.dataset.filter;
          buttons.forEach((b) => b.classList.toggle("active", b === button));
          targets.forEach((target) => {
            const match = value === "All" || target.dataset.category === value;
            target.classList.toggle("filter-hidden", !match);
          });
        });
      });
    });
  });
})();
