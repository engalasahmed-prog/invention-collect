document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scroll for Nav Links
    const navLinks = document.querySelectorAll('.nav-links a, .cta-nav, .hero-btns a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission Handling
    const submissionForm = document.getElementById('submissionForm');
    if (submissionForm) {
        submissionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic UI feedback
            const btn = submissionForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Encrypting & Sending...';
            btn.disabled = true;

            // Simulate submission
            setTimeout(() => {
                alert('Success! Your invention has been securely submitted. Our legal team will review it and contact you via email within 48 hours.');
                submissionForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });

    // Animate Patent Tracking (Live feel)
    const trackingPoints = document.querySelectorAll('.tracking-point');
    let currentPoint = 2; // Starting at step 3

    setInterval(() => {
        trackingPoints.forEach((p, idx) => {
            if (idx <= currentPoint) p.classList.add('active');
            else p.classList.remove('active');
        });
        
        // Simulating progress
        if (Math.random() > 0.8) {
            // No actual change, just for visual "live" feel if we wanted to toggle
        }
    }, 3000);
});
