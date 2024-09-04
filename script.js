const switchInput = document.getElementById('switch');
const overlay = document.querySelector('.overlay');

switchInput.addEventListener('change', function() {
    if (this.checked) {
        overlay.style.opacity = '1';
    } else {
        overlay.style.opacity = '0';
    }
});
document.getElementById('switch').addEventListener('change', function() {
    const switchSound = document.getElementById('switch-sound');
    switchSound.currentTime = 0; // Reseta o som para o início
    switchSound.play(); // Toca o som
});

