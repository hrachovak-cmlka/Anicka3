document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        }
    });

    // Testimonial Swiper Initialization
    const testimonialSwiper = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // "Show More" Toggle Functionality
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        const content = card.querySelector('.testimonial-content');
        const btn = card.querySelector('.read-more-btn');
        const p = content.querySelector('p');

        // Check if text is long enough to need a toggle
        // and show button if yes
        if (p.scrollHeight > 150) { // Matching CSS max-height
            btn.style.display = 'block';
        }

        btn.addEventListener('click', () => {
            card.classList.toggle('expanded');
            if (card.classList.contains('expanded')) {
                btn.textContent = 'Zobrazit méně';
            } else {
                btn.textContent = 'Zobrazit více';
                // Scroll back to card top if it's out of view
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            // Update Swiper height/layout after expansion
            testimonialSwiper.update();
        });
    });
});
