// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId !== "#") {
            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

            // Close mobile menu
            navLinks.classList.remove("active");
        }
    });
});

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});

// Resume Download
function downloadResume() {
    const link = document.createElement("a");
    link.href = "Samuel-Olaleye-Resume.pdf";
    link.download = "Samuel-Olaleye-Resume.pdf";
    link.click();
}
