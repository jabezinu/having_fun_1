// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navCounter = document.getElementById('nav-counter');
    const navThemes = document.getElementById('nav-themes');
    const counterSection = document.getElementById('counter-section');
    const themesSection = document.getElementById('themes-section');
    
    // Navigation click handlers
    navCounter.addEventListener('click', function() {
        setActiveNav(navCounter);
        setActiveSection(counterSection);
    });
    
    navThemes.addEventListener('click', function() {
        setActiveNav(navThemes);
        setActiveSection(themesSection);
    });
    
    function setActiveNav(element) {
        // Remove active class from all nav items
        document.querySelectorAll('nav li').forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to selected item
        element.classList.add('active');
    }
    
    function setActiveSection(element) {
        // Hide all sections
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active-section');
        });
        // Show selected section
        element.classList.add('active-section');
    }
    
    // Counter functionality
    const counterEl = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
    
    // Function to update counter with animation
    function updateCounter(newValue) {
        // Add animation
        counterEl.style.transform = 'scale(1.2)';
        counterEl.style.opacity = '0.8';
        
        // Update the value
        setTimeout(() => {
            count = newValue;
            counterEl.textContent = count;
            
            // Change color based on value
            if (count > 0) {
                counterEl.style.color = '#40c057';
            } else if (count < 0) {
                counterEl.style.color = '#fa5252';
            } else {
                counterEl.style.color = 'var(--text-color)';
            }
            
            // Reset animation
            counterEl.style.transform = 'scale(1)';
            counterEl.style.opacity = '1';
        }, 150);
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
            updateCounter(count + 1);
            incrementBtn.classList.add('active');
            setTimeout(() => incrementBtn.classList.remove('active'), 200);
        } else if (e.key === 'ArrowDown') {
            updateCounter(count - 1);
            decrementBtn.classList.add('active');
            setTimeout(() => decrementBtn.classList.remove('active'), 200);
        } else if (e.key === 'r') {
            updateCounter(0);
            resetBtn.classList.add('active');
            setTimeout(() => resetBtn.classList.remove('active'), 200);
        }
    });
    
    // Theme switchers
    const themeLight = document.getElementById('theme-light');
    const themeDark = document.getElementById('theme-dark');
    const themeBlue = document.getElementById('theme-blue');
    const themeGreen = document.getElementById('theme-green');
    
    // Function to apply theme
    function applyTheme(themeName) {
        // Remove all theme classes
        document.body.classList.remove('dark-theme', 'blue-theme', 'green-theme');
        
        // Add selected theme class
        if (themeName !== 'light') {
            document.body.classList.add(`${themeName}-theme`);
        }
        
        // Add a subtle animation to highlight the theme change
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        overlay.style.pointerEvents = 'none';
        overlay.style.zIndex = '9999';
        overlay.style.transition = 'opacity 0.3s ease';
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 300);
        }, 50);
    }
    
    // Theme click handlers
    themeLight.addEventListener('click', function() {
        applyTheme('light');
    });
    
    themeDark.addEventListener('click', function() {
        applyTheme('dark');
    });
    
    themeBlue.addEventListener('click', function() {
        applyTheme('blue');
    });
    
    themeGreen.addEventListener('click', function() {
        applyTheme('green');
    });
}); 