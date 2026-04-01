document.getElementById('gateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    
    // Play Gate Sound
    const audio = document.getElementById('gateSound');
    if(audio) audio.play();

    // Fade Out Animation
    document.body.style.transition = "all 2s ease";
    document.body.style.background = "#000";
    document.querySelector('.content-box').style.opacity = "0";
    document.querySelector('.estate-img').style.filter = "brightness(0)";

    setTimeout(() => {
        window.location.href = target;
    }, 2000);
});