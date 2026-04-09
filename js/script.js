document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Header Scroll Effect
       ========================================================================== */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Mobile Menu Toggle (Simple placeholder behavior)
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navCta = document.querySelector('.nav-cta');

    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = navList.style.display === 'flex';
        
        if (isExpanded) {
            navList.style.display = 'none';
            navCta.style.display = 'none';
        } else {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '100%';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.backgroundColor = 'var(--color-surface)';
            navList.style.padding = 'var(--space-md)';
            navList.style.boxShadow = 'var(--shadow-md)';
            navCta.style.display = 'inline-flex';
            navCta.style.marginLeft = 'var(--space-md)';
        }
    });

    // Reset mobile menu on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navList.style.display = 'flex';
            navList.style.flexDirection = 'row';
            navList.style.position = 'static';
            navList.style.padding = '0';
            navList.style.boxShadow = 'none';
            navCta.style.display = 'inline-flex';
            navCta.style.marginLeft = '0';
        } else {
            navList.style.display = 'none';
            navCta.style.display = 'none';
        }
    });

    /* ==========================================================================
       Intersection Observer for Reveal Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before the element is fully in view
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
