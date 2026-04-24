// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Hover effect on links and buttons
const interactables = document.querySelectorAll('a, button');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'var(--primary-color)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2
});

gsap.from('.main-glass', {
    y: 100,
    opacity: 0,
    rotationX: 15,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.5
});

// Floating Math Elements Animation
const floaters = document.querySelectorAll('.floating-math');
floaters.forEach((floater, i) => {
    gsap.to(floater, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Profile Image Upload Preview
const profileUpload = document.getElementById('profile-upload');
const profilePreview = document.getElementById('profile-preview');

if (profileUpload && profilePreview) {
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                profilePreview.src = event.target.result;
                
                // Add a small animation when image changes
                gsap.from(profilePreview, {
                    scale: 0.8,
                    opacity: 0.5,
                    duration: 0.5,
                    ease: "back.out(1.7)"
                });
            };
            reader.readAsDataURL(file);
        }
    });
}
