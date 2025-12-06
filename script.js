window.openCertModal = function(certId) {
    const modal = document.getElementById(`modal-${certId}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCertModal = function(certId) {
    const modal = document.getElementById(`modal-${certId}`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Initialize certificate modal keyboard controls
function initCertificateModals() {
    // Close certificate modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.cert-modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize EmailJS
    emailjs.init('TYln8CvELLTHdVNkv');
    
    // Initialize all functionality
    initAnimatedBackground();
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
});

// Initialize animated background elements
function initAnimatedBackground() {
    createAnimatedBackground();
    createParticles();
    createGeometricLines();
    createPulsingDots();
}

// Create animated background structure
function createAnimatedBackground() {
    const body = document.body;
    
    // Create main animated background container
    const animatedBg = document.createElement('div');
    animatedBg.className = 'animated-bg';
    
    // Create gradient background
    const gradientBg = document.createElement('div');
    gradientBg.className = 'gradient-bg';
    animatedBg.appendChild(gradientBg);
    
    // Create floating shapes
    const floatingShapes = document.createElement('div');
    floatingShapes.className = 'floating-shapes';
    
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        floatingShapes.appendChild(shape);
    }
    
    animatedBg.appendChild(floatingShapes);
    body.insertBefore(animatedBg, body.firstChild);
}

// Create floating particles
function createParticles() {
    const animatedBg = document.querySelector('.animated-bg');
    const particles = document.createElement('div');
    particles.className = 'particles';
    
    // Create particles with random positions and delays
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        const leftPosition = Math.random() * 100;
        particle.style.left = leftPosition + '%';
        
        // Random animation delay
        const delay = Math.random() * 15;
        particle.style.animationDelay = `-${delay}s`;
        
        // Random size variation
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particles.appendChild(particle);
    }
    
    animatedBg.appendChild(particles);
}

// Create geometric lines
function createGeometricLines() {
    const animatedBg = document.querySelector('.animated-bg');
    const geometricLines = document.createElement('div');
    geometricLines.className = 'geometric-lines';
    
    // Create horizontal lines
    for (let i = 0; i < 2; i++) {
        const line = document.createElement('div');
        line.className = 'line line-horizontal';
        
        const topPosition = 20 + (i * 40);
        line.style.top = topPosition + '%';
        
        const delay = i * 4;
        line.style.animationDelay = `-${delay}s`;
        
        geometricLines.appendChild(line);
    }
    
    // Create vertical lines
    for (let i = 0; i < 2; i++) {
        const line = document.createElement('div');
        line.className = 'line line-vertical';
        
        const leftPosition = 30 + (i * 40);
        line.style.left = leftPosition + '%';
        
        const delay = 2 + (i * 4);
        line.style.animationDelay = `-${delay}s`;
        
        geometricLines.appendChild(line);
    }
    
    animatedBg.appendChild(geometricLines);
}

// Create pulsing dots
function createPulsingDots() {
    const animatedBg = document.querySelector('.animated-bg');
    const pulsingDots = document.createElement('div');
    pulsingDots.className = 'pulsing-dots';
    
    const dotPositions = [
        { top: '15%', left: '15%', delay: 0 },
        { top: '25%', right: '20%', delay: 1 },
        { bottom: '30%', left: '25%', delay: 2 },
        { bottom: '20%', right: '15%', delay: 0.5 },
        { top: '50%', left: '50%', delay: 1.5 }
    ];
    
    dotPositions.forEach(pos => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        if (pos.top) dot.style.top = pos.top;
        if (pos.bottom) dot.style.bottom = pos.bottom;
        if (pos.left) dot.style.left = pos.left;
        if (pos.right) dot.style.right = pos.right;
        
        dot.style.animationDelay = `-${pos.delay}s`;
        
        pulsingDots.appendChild(dot);
    });
    
    animatedBg.appendChild(pulsingDots);
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active nav link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Web Developer',
        'QA Tester',
        'IT Student',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .about-text, .stat-item, .skill-category, .project-card, .timeline-item, .cert-item, .contact-info, .contact-form');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Special animations for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('slide-in-left');
        } else {
            item.classList.add('slide-in-right');
        }
        observer.observe(item);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 500);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Certificate Modal Functions
function openCertModal(certId) {
    const modal = document.getElementById(`modal-${certId}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCertModal(certId) {
    const modal = document.getElementById(`modal-${certId}`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close certificate modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.cert-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// Contact form functionality with EmailJS
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('from_name');
        const email = formData.get('from_email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Send email using EmailJS
        emailjs.send('service_oc7w0ds', 'template_6jwzo6j', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Jestopher'
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, function(error) {
            console.error('FAILED...', error);
            showNotification('Failed to send message. Please try again or contact me directly via email.', 'error');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced parallax effect for hero background and animated elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-img');
    
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
    
    // Parallax effect for floating shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (scrolled * (0.1 + index * 0.02));
        shape.style.transform = `translateY(${speed}px)`;
    });
});

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;

document.head.appendChild(notificationStyles);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-dependent functions are called individually above
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
});

// Dynamic particle generation on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Generate particles on scroll movement
    if (Math.abs(scrollTop - lastScrollTop) > 50) {
        createScrollParticle();
        lastScrollTop = scrollTop;
    }
});

function createScrollParticle() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle scroll-particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    
    // Smaller, faster animation
    particle.style.animationDuration = '3s';
    particle.style.opacity = '0.8';
    
    particles.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 3000);
}

// Interactive hover effects for animated elements
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length && 
        konamiCode.every((code, index) => code === konamiSequence[index])) {
        
        showNotification('🎉 Konami Code activated! You found the easter egg!', 'success');
        
        // Add fun animation
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        // Create burst of particles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createScrollParticle(), i * 100);
        }
        
        konamiCode = [];
    }
});

// Add rainbow animation CSS
const rainbowStyles = document.createElement('style');
rainbowStyles.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyles);

// Cleanup function for performance
function cleanup() {
    // Remove excess scroll particles
    const scrollParticles = document.querySelectorAll('.scroll-particle');
    if (scrollParticles.length > 10) {
        for (let i = 0; i < scrollParticles.length - 10; i++) {
            scrollParticles[i].remove();
        }
    }
}

// Run cleanup periodically
setInterval(cleanup, 5000);