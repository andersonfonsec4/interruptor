const switchInput = document.getElementById('switch');
const overlay = document.querySelector('.overlay');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        overlay.style.opacity = '1';
    } else {
        overlay.style.opacity = '0';
    }
});
