// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Simple Resume Download Button (Add this in Contact section if you want)
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Samuel-Olaleye-Resume.pdf'; // Put your resume file in the root folder
    link.download = 'Samuel-Olaleye-Resume.pdf';
    link.click();
}
