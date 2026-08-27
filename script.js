document.addEventListener('DOMContentLoaded', () => {
    // Navigation Elements
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const sidebar = document.getElementById('sidebar');

    // Navigation Functionality
    function switchSection(sectionId) {
        // Update nav items
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            }
        });

        // Update sections with animation
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
                animateSkillBars();
            }
        });

        // Close mobile menu if open
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    }

    // Nav item click handlers
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            switchSection(item.dataset.section);
        });
    });

    // CTA button navigation
    document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(btn.dataset.nav);
        });
    });

    // Mobile hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Skill Bar Animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.dataset.progress;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 100);
        });
    }

    // Initial animation for skill bars if on skills section
    if (document.querySelector('#skills.active')) {
        animateSkillBars();
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Thank you! Your message has been sent.</p>
            `;
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #0088FF, #0066cc);
                color: white;
                padding: 30px 50px;
                border-radius: 16px;
                text-align: center;
                z-index: 9999;
                animation: fadeInUp 0.5s ease;
                box-shadow: 0 10px 40px rgba(0, 136, 255, 0.5);
            `;

            document.body.appendChild(successMsg);

            // Add animation keyframes
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);

            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.style.animation = 'fadeInUp 0.5s ease reverse';
                setTimeout(() => successMsg.remove(), 500);
            }, 3000);

            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Typing effect for hero section
    const roleElement = document.querySelector('.role');
    if (roleElement) {
        const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Lover'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeRole() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                roleElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                roleElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => { isDeleting = true; }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeRole, speed);
        }

        typeRole();
    }

    // Parallax effect on hero section
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (hero && window.innerWidth > 1024) {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            hero.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Add glow effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.edu-card, .project-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 136, 255, 0.1), var(--bg-secondary))`;
            } else {
                card.style.background = 'var(--bg-secondary)';
            }
        });
    });

    // Initialize
    animateSkillBars();
});
