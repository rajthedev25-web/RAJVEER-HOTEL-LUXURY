document.getElementById('enterBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const destination = this.getAttribute('href');
    
    // Play sound on click
    const sound = document.getElementById('welcomeSound');
    sound.play();

    // Fade out effect before navigating
    document.body.style.transition = "opacity 1.5s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = destination;
    }, 1500);
});

// Intro Animation log
console.log("Grand Essence Welcome Portal Active.");