function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    const menuOverlay = document.getElementById('menuOverlay');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    menuItems.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}

// Close menu when clicking overlay
document.getElementById('menuOverlay').addEventListener('click', function() {
    const menuItems = document.getElementById('menuItems');
    const menuOverlay = document.getElementById('menuOverlay');
    menuItems.classList.remove('active');
    menuOverlay.classList.remove('active');
});

const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', function() {
    this.classList.add('clicked');
    
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 1000);
});

// Toggle nav buttons visibility
function toggleNavButtons() {
    const navButtons = document.getElementById('navButtons');
    navButtons.classList.toggle('active');
}




let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
