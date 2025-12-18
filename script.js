// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.parentElement.nextElementSibling.querySelector('h3').textContent;
        const price = this.parentElement.nextElementSibling.querySelector('.sale-price').textContent;
        
        // Simple notification
        alert(`${productName} added to cart!\nPrice: ${price}`);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you! We'll send updates to ${email}`);
        this.reset();
    });
}

// Heart icon toggle
const heartIcons = document.querySelectorAll('.icon-link');
heartIcons.forEach(icon => {
    if (icon.querySelector('.fa-heart')) {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            this.querySelector('.fa-heart').classList.toggle('liked');
        });
    }
});

// Add some dynamic effects on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards for animation
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Cart counter (simple demo)
let cartCount = 0;
function updateCartCount() {
    const cartIcon = document.querySelector('.fa-shopping-cart').parentElement;
    cartIcon.setAttribute('data-count', cartCount);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCartCount();
    });
});

// Mobile menu toggle (if needed in future)
console.log('StepStyle website loaded successfully!');
