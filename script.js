// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Counter functionality
    const counterEl = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        counterEl.textContent = count;
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        counterEl.textContent = count;
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        counterEl.textContent = count;
    });
    
    // Background color change functionality
    const blueBtn = document.getElementById('color-blue');
    const greenBtn = document.getElementById('color-green');
    const pinkBtn = document.getElementById('color-pink');
    const colorResetBtn = document.getElementById('color-reset');
    
    blueBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#cfe2ff';
    });
    
    greenBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#d1e7dd';
    });
    
    pinkBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#f8d7da';
    });
    
    colorResetBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#f5f5f5';
    });
}); 