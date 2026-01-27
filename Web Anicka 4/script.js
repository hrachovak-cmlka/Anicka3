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
});
