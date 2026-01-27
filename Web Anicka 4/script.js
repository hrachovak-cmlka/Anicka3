document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Simplified placeholder)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // In a real implementation, we'd toggle a visible class on mobile
            alert('Mobilní menu bude implementováno v příštím kroku.');
        });
    }

    // Scroll Animations (Simple reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Cookie Bar
    const cookieBar = document.getElementById('cookie-bar');
    const cookieBtn = document.getElementById('accept-cookies');
    if (cookieBtn && cookieBar) {
        cookieBtn.addEventListener('click', () => {
            cookieBar.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });

        if (localStorage.getItem('cookiesAccepted')) {
            cookieBar.style.display = 'none';
        }
    }

    // Splide Initialization
    if (document.querySelector('#testimonial-slider')) {
        const splide = new Splide('#testimonial-slider', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                    padding: '10px',
                },
            },
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
        }).mount();
    }

    // Show More Functionality
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    showMoreBtns.forEach(btn => {
        const textElement = btn.previousElementSibling;

        // Check if text is actually overflowing
        function checkOverflow() {
            if (textElement.scrollHeight > textElement.clientHeight) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        }

        // Initial check
        setTimeout(checkOverflow, 200);

        btn.addEventListener('click', () => {
            const card = btn.closest('.testimonial-card');
            card.classList.toggle('expanded');

            if (card.classList.contains('expanded')) {
                btn.textContent = 'Zobrazit méně';
            } else {
                btn.textContent = 'Zobrazit více';
            }

            // Re-layout Splide if it's inside a slider to adjust heights
            if (window.splide) {
                // We might need to refresh splide if the height change is drastic
            }
        });
    });
});
