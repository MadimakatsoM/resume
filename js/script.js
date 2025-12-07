
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set the Current Year in the Footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // 2. Animate Skill Bars on Scroll
    const skillSection = document.getElementById('skills');
    let skillsAnimated = false;

    const animateSkills = () => {
        if (skillsAnimated) return;

        // Check if the skills section is currently visible in the viewport
        const rect = skillSection.getBoundingClientRect();
        // The section is considered visible if its top edge is within the bottom 1/3 of the screen
        const triggerPoint = window.innerHeight * 0.66; 
        
        if (rect.top < triggerPoint && rect.bottom > 0) {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0'; 
                requestAnimationFrame(() => {
                    bar.style.width = targetWidth; 
                });
            });
            skillsAnimated = true; 
        }
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); 

    // 3. Simple Navbar Shadow on Scroll
    const navbar = document.getElementById('navbar');
    const scrollHandler = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
    window.addEventListener('scroll', scrollHandler);
    // (Note: The CSS for 'navbar-scrolled' should be added to your style.css if you want a shadow effect)

    // 4. Form Submission Mock-up (with Task 10 button behavior)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = this.querySelector('.contact-btn');
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            setTimeout(() => {
                // Success feedback using Neon Green
                submitButton.textContent = 'Message Sent! 🚀';
                submitButton.style.backgroundColor = 'var(--success-color)';
                submitButton.style.borderColor = 'var(--success-color)';

                // Reset form and button after a few seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.disabled = false;
                    // Reset to initial Task 10 color (Neon Red/Orange)
                    submitButton.style.backgroundColor = 'var(--danger-color)';
                    submitButton.style.borderColor = 'var(--danger-color)';
                }, 3000);
            }, 1500);
        });
    }
});