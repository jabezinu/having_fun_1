// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Smooth follow with slight delay
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 70);
    });
    
    // Cursor interactions
    document.querySelectorAll('button, .nav-item, .theme-option, .hamburger').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.width = '16px';
            cursor.style.height = '16px';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.backgroundColor = 'rgba(255, 62, 85, 0.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.backgroundColor = 'transparent';
        });
    });
    
    // Modern navigation
    const hamburger = document.querySelector('.hamburger');
    const navOverlay = document.querySelector('.nav-overlay');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Disable scroll when menu is open
        if (navOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Navigation items click handlers
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get section ID from data attribute
            const targetSection = document.getElementById(this.dataset.section + '-section');
            
            // Close navigation
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Apply staggered animation to menu items on close
            navItems.forEach((navItem, index) => {
                setTimeout(() => {
                    navItem.style.opacity = '0';
                    navItem.style.transform = 'translateY(20px)';
                    
                    // Reset styles after animation completes
                    setTimeout(() => {
                        navItem.style.opacity = '';
                        navItem.style.transform = '';
                    }, 500);
                }, index * 50);
            });
            
            // Update active states
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section with a slight delay
            setTimeout(() => {
                sections.forEach(section => section.classList.remove('active-section'));
                targetSection.classList.add('active-section');
            }, 300);
        });
    });
    
    // Add escape key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
            hamburger.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Counter functionality
    const counterEl = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
    
    // Create audio elements for sound effects
    const createAudioElement = (base64Data, volume = 1) => {
        const audio = new Audio();
        audio.src = base64Data;
        audio.volume = volume;
        return audio;
    };
    
    // Base64 encoded sound effects
    const incrementSound = createAudioElement('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFpgCampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqamp//////////////////////////8AAAAKTEFNRTMuMTAwBEgAAAAAAAAAABUgJANXQQABzAAABaZ4aeWiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxLYAAAP4MYAAAAAAA/gAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==', 0.4);
    
    const decrementSound = createAudioElement('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADwADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAKTEFORTNILTE1MAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuOTguNFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS0AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+DaAAEQAYfRBgAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAACOFCAAAAA8MEdAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxLIAAAHwYYAAAACPgwwAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS2AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS0AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMS0AAAD+AGEAAAAEAAA8AAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMSyAAAB8GGAAAAAj4MEAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV', 0.4);
    
    function updateCounter(newValue) {
        // Play appropriate sound effect
        if (newValue > count) {
            incrementSound.currentTime = 0;
            incrementSound.play();
        } else if (newValue < count) {
            decrementSound.currentTime = 0;
            decrementSound.play();
        } else if (newValue === 0 && count !== 0) {
            resetSound.currentTime = 0;
            resetSound.play();
        }
        
        // Create particles effect
        if (newValue !== count) {
            createParticles(counterEl, newValue > count ? 'increment' : 'decrement');
        }
        
        // Update counter with animation
        counterEl.style.transform = 'scale(1.2) rotate(-5deg)';
        counterEl.style.opacity = '0.5';
        
        setTimeout(() => {
            count = newValue;
            counterEl.textContent = count;
            
            // Change color based on value
            if (count > 0) {
                counterEl.style.color = 'var(--accent-color)';
            } else if (count < 0) {
                counterEl.style.color = '#ff8800';
            } else {
                counterEl.style.color = 'var(--contrast-color)';
            }
            
            // Reset animation
            counterEl.style.transform = 'scale(1) rotate(0deg)';
            counterEl.style.opacity = '1';
        }, 200);
    }
    
    function createParticles(element, type) {
        const particleCount = 8;
        const colors = type === 'increment' ? ['#ff3e55', '#ff6e88', '#ffb4c2'] : ['#ff8800', '#ffaa33', '#ffcc66'];
        
        // Get element position
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random styles
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Position at center of counter
            particle.style.position = 'fixed';
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            
            // Animation properties
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const speed = Math.random() * 2 + 1;
            
            // Append to body and animate
            document.body.appendChild(particle);
            
            // Animate using keyframes and Web Animation API
            particle.animate([
                {
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: speed * 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                fill: 'forwards'
            }).onfinish = () => particle.remove();
        }
    }
    
    // Button event listeners
    incrementBtn.addEventListener('click', function() {
        updateCounter(count + 1);
    });
    
    decrementBtn.addEventListener('click', function() {
        updateCounter(count - 1);
    });
    
    resetBtn.addEventListener('click', function() {
        updateCounter(0);
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp') {
            e.preventDefault(); // Prevent page scrolling
            updateCounter(count + 1);
            incrementBtn.classList.add('active');
            setTimeout(() => incrementBtn.classList.remove('active'), 200);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault(); // Prevent page scrolling
            updateCounter(count - 1);
            decrementBtn.classList.add('active');
            setTimeout(() => decrementBtn.classList.remove('active'), 200);
        } else if (e.key === 'r') {
            e.preventDefault(); // Prevent page refreshing
            updateCounter(0);
            resetBtn.classList.add('active');
            setTimeout(() => resetBtn.classList.remove('active'), 200);
        }
    });
    
    // Theme switchers
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            themeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to selected option
            this.classList.add('active');
            
            // Extract theme name from ID
            const themeId = this.id;
            const themeName = themeId.replace('theme-', '');
            
            // Apply theme
            applyTheme(themeName);
        });
    });
    
    function applyTheme(themeName) {
        // Remove all theme classes
        document.body.classList.remove('neon-theme', 'sunset-theme', 'ocean-theme');
        
        // Add selected theme class
        if (themeName !== 'mono') {
            document.body.classList.add(`${themeName}-theme`);
        }
        
        // Create reveal effect
        const reveal = document.createElement('div');
        reveal.className = 'theme-reveal';
        document.body.appendChild(reveal);
        
        // Animate reveal
        reveal.animate([
            { clipPath: 'circle(0% at center)' },
            { clipPath: 'circle(150% at center)' }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
            fill: 'forwards'
        }).onfinish = () => reveal.remove();
    }
    
    // Add animation for page load
    function initPageAnimation() {
        const hamburgerEl = document.querySelector('.hamburger');
        const logoEl = document.querySelector('.logo');
        
        // Animate hamburger
        hamburgerEl.style.transform = 'translateY(-20px)';
        hamburgerEl.style.opacity = '0';
        
        // Animate logo
        logoEl.style.transform = 'translateY(-20px)';
        logoEl.style.opacity = '0';
        
        // Animate in with delay
        setTimeout(() => {
            hamburgerEl.style.transform = 'translateY(0)';
            hamburgerEl.style.opacity = '1';
            
            setTimeout(() => {
                logoEl.style.transform = 'translateY(0)';
                logoEl.style.opacity = '1';
            }, 100);
        }, 300);
    }
    
    // Initialize page animation
    initPageAnimation();
    
    // Add CSS for animations and particles
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
        }
        
        .theme-reveal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--bg-color);
            z-index: -1;
            clip-path: circle(0% at center);
        }
        
        button.active {
            transform: scale(0.9);
        }
        
        .logo, .hamburger {
            transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
                       opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }
    `;
    document.head.appendChild(style);
}); 