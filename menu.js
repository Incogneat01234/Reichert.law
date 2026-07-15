document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        const setMenuOpen = function(isOpen) {
            mainNav.classList.toggle('active', isOpen);
            const spans = menuToggle.querySelectorAll('span');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        };

        menuToggle.addEventListener('click', function() {
            setMenuOpen(!mainNav.classList.contains('active'));
        });
        mainNav.addEventListener('click', function(event) {
            if (event.target.closest('a')) setMenuOpen(false);
        });
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('active')) {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });
    }

    const jumpLinks = document.querySelectorAll('.academic-jump-nav a[href^="#"]');
    if (jumpLinks.length && 'IntersectionObserver' in window) {
        const sections = Array.from(jumpLinks)
            .map(function(link) { return document.querySelector(link.getAttribute('href')); })
            .filter(Boolean);
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                jumpLinks.forEach(function(link) {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-20% 0px -70% 0px' });
        sections.forEach(function(section) { observer.observe(section); });
    }
});
