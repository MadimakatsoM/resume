// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Skill Bar Animation (Triggered on Scroll/Visibility) ---
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Intersection Observer to watch for skill bars entering the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgress = entry.target;
                const width = skillProgress.style.width;
                
                // Set the final width to start the CSS animation
                skillProgress.style.width = width;
                
                observer.unobserve(skillProgress); // Stop observing once animated
            } else {
                 // Reset width to 0% when leaving viewport (optional, for re-scroll animation)
                 // skillProgress.style.width = '0%';
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the bar is visible

    skillBars.forEach(bar => {
        // Initially set width to 0 (CSS handles the transition to the final width)
        bar.style.width = '0%'; 
        observer.observe(bar);
    });

    // --- 3. Simple Button Interaction Feedback ---
    const primaryBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    primaryBtns.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            btn.style.transform = 'scale(0.98)';
        });
        btn.addEventListener('mouseup', function() {
            btn.style.transform = '';
        });
    });
});