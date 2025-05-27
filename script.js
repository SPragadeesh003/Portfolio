document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        const icon = menuToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            } else { // For external links like GitHub
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    function onScroll() {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const headerElement = document.querySelector('header');
        const navHeight = headerElement ? headerElement.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 20; // Adjust for nav height and some offset
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // If scrolled to the very bottom, mark the last section as current
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) { // -2 for buffer
            const lastSection = sections[sections.length - 1];
            if (lastSection) currentSectionId = lastSection.getAttribute('id');
        }


        navLinks.forEach(link => {
            link.classList.remove('current');
            // Check if the link's href matches #currentSectionId
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('current');
            }
        });

        // Default to 'Home' if no section is actively scrolled to the top (e.g., at the very top of the page)
        if (currentSectionId === '' && sections.length > 0 && scrollPosition < sections[0].offsetTop - navHeight - 20) {
            const homeLink = document.querySelector('a.nav-link[href="#hero"]');
            if (homeLink) {
                navLinks.forEach(link => link.classList.remove('current')); // Clear others
                homeLink.classList.add('current');
            }
        } else if (currentSectionId === '' && sections.length === 0) { // Fallback if no sections
            const homeLink = document.querySelector('a.nav-link[href="#hero"]');
            if (homeLink) {
                navLinks.forEach(link => link.classList.remove('current'));
                homeLink.classList.add('current');
            }
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Call on load to set initial state

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});