const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];
const themeToggle = document.getElementById("theme-toggle");
const themeIconSun = document.getElementById("theme-icon-sun");
const themeIconMoon = document.getElementById("theme-icon-moon");
const revealItems = [...document.querySelectorAll(".reveal")];
const sections = [...document.querySelectorAll("main section[id]")];
const tiltCards = [...document.querySelectorAll(".tilt-card")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const syncThemeIcons = (theme) => {
    const isLight = theme === "light";
    themeIconSun?.classList.toggle("hidden", !isLight);
    themeIconMoon?.classList.toggle("hidden", isLight);
};

const applyTheme = (theme) => {
    body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
    syncThemeIcons(theme);
};

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = body.classList.contains("light") ? "dark" : "light";
        applyTheme(nextTheme);
    });
}

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetSelector = link.getAttribute("href");

        if (!targetSelector || !targetSelector.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetSelector);
        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        mobileNav?.classList.add("hidden");
    });
});

revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 280)}ms`);
});

if (prefersReducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
}

const setActiveNav = (activeId) => {
    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        link.classList.toggle("is-active", isActive);
    });
};

if (sections.length > 0) {
    const updateActiveSection = () => {
        const viewportMarker = window.scrollY + (window.innerHeight * 0.45);
        let activeSection = sections[0];

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const nextSection = sections[index + 1];
            const sectionBottom = nextSection ? nextSection.offsetTop : document.body.scrollHeight;

            if (viewportMarker >= sectionTop && viewportMarker < sectionBottom) {
                activeSection = section;
            }
        });

        if (activeSection?.id) {
            setActiveNav(activeSection.id);
        }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();
}

if (!prefersReducedMotion.matches) {
    tiltCards.forEach((card) => {
        let frameId = null;

        const resetCard = () => {
            card.style.transform = "";
        };

        card.addEventListener("mousemove", (event) => {
            if (window.innerWidth < 1024) {
                return;
            }

            const bounds = card.getBoundingClientRect();
            const relativeX = (event.clientX - bounds.left) / bounds.width;
            const relativeY = (event.clientY - bounds.top) / bounds.height;
            const rotateY = (relativeX - 0.5) * 8;
            const rotateX = (0.5 - relativeY) * 7;

            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                card.style.transition = "transform 0.08s linear, box-shadow 0.28s ease, border-color 0.28s ease, background-color 0.28s ease, opacity 0.28s ease";
                card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
            });
        });

        card.addEventListener("mouseleave", () => {
            cancelAnimationFrame(frameId);
            card.style.transition = "transform 0.22s ease, box-shadow 0.28s ease, border-color 0.28s ease, background-color 0.28s ease, opacity 0.28s ease";
            resetCard();
        });
    });

    const heroSection = document.getElementById("inicio");
    if (heroSection) {
        const heroMove = () => {
            const offset = window.scrollY * 0.08;
            heroSection.style.setProperty("--hero-shift", `${offset}px`);
        };

        window.addEventListener("scroll", heroMove, { passive: true });
        heroMove();
    }
}
