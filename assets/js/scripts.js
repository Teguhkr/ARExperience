document.addEventListener('DOMContentLoaded', () => {
    const splashTimeout = setTimeout(() => {
        const splashElement = document.getElementById('splash').style.display = 'none';
    }, 4000);

    const logoTimeout = setTimeout(() => {
        const logoScreenElement = document.getElementById('logo-screen').style.display = 'flex';
    }, 3000); 

    const logoClickHandler = () => {
        const logo = document.getElementById('logo');
        logo.style.animation = 'scaleOut 0.6s forwards';

        document.body.style.transition = 'background-color 3s ease';
        document.body.style.backgroundColor = '#000';

        setTimeout(() => {
            document.getElementById('logo-screen').style.display = 'none';
        }, 600); 
    };

    document.getElementById('logo').addEventListener('click', logoClickHandler);

    // Membersihkan timeout saat elemen logo diklik
    document.getElementById('logo').addEventListener('click', () => {
        clearTimeout(splashTimeout);
        clearTimeout(logoTimeout);
    });

    // Play audio when the page loads
    var audio = document.getElementById('splash-sound');
    audio.play();
});
