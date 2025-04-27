// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Counter functionality
    const counterEl = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
    
    function updateCounter(newValue) {
        // Add animation class
        counterEl.classList.add('animate');
        
        // Update the value
        count = newValue;
        counterEl.textContent = count;
        
        // Change color based on value
        if (count > 0) {
            counterEl.style.color = '#4CAF50';
        } else if (count < 0) {
            counterEl.style.color = '#f44336';
        } else {
            counterEl.style.color = '#4361ee';
        }
        
        // Remove animation class after animation completes
        setTimeout(() => {
            counterEl.classList.remove('animate');
        }, 300);
    }
    
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
    
    // Background color change functionality
    const blueBtn = document.getElementById('color-blue');
    const greenBtn = document.getElementById('color-green');
    const pinkBtn = document.getElementById('color-pink');
    const purpleBtn = document.getElementById('color-purple');
    const colorResetBtn = document.getElementById('color-reset');
    
    // Function to apply theme color
    function applyTheme(bgColor, highlight) {
        document.body.style.backgroundColor = bgColor;
        
        // Add ripple effect to the button
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }
    
    blueBtn.addEventListener('click', function() {
        applyTheme('#cfe2ff');
    });
    
    greenBtn.addEventListener('click', function() {
        applyTheme('#d1e7dd');
    });
    
    pinkBtn.addEventListener('click', function() {
        applyTheme('#f8d7da');
    });
    
    purpleBtn.addEventListener('click', function() {
        applyTheme('#e2d9f3');
    });
    
    colorResetBtn.addEventListener('click', function() {
        applyTheme('#f8f9fa');
    });
    
    // Add a subtle animation to the page
    function addFloatingEffect() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = 'float 3s infinite ease-in-out';
                card.style.animationDelay = `${index * 0.2}s`;
            }, 1000);
        });
    }
    
    // Add float animation after page loads
    setTimeout(addFloatingEffect, 500);
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate {
            animation: pulse 0.3s ease;
        }
        
        .active {
            transform: scale(0.9) !important;
        }
        
        .ripple {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, transparent 10%, rgba(255,255,255,0.3) 10.01%) center/15000%;
            opacity: 0;
            animation: ripple 1s ease-out;
            pointer-events: none;
            z-index: -1;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @keyframes ripple {
            0% {
                background-size: 0%;
                opacity: 1;
            }
            100% {
                background-size: 15000%;
                opacity: 0;
            }
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);
}); 