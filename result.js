function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        score: params.get('score'),
        total: params.get('total')
    };
}

function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const { score, total } = getQueryParams();
    console.log('Score:', score);   
    console.log('Total:', total);   

    document.getElementById('score').innerText = `You scored ${score} out of ${total}`;
    const audio = document.getElementById('result-audio');
    const audioElement = document.getElementById('background-music');
    audioElement.volume = 0.2;
    const backgroundMusic = document.getElementById('background-music');
    const giftVideo = document.getElementById('gift-video');
    const birthdayMessage = document.getElementById('birthday-message');

    function playBackgroundMusic() {
        backgroundMusic.play().then(() => {
            console.log('Background music started playing');
        }).catch(error => {
            console.error('Error playing background music:', error);
        });
    }

    document.getElementById('play-music-btn').addEventListener('click', playBackgroundMusic);

    if (score / total < 0.4) {
        audio.src = 'skor kecil.mp3';
        giftVideo.style.display = 'block';  
        giftVideo.muted = true;   
        giftVideo.play();  
        birthdayMessage.style.display = 'block';  
    } else if (score / total < 0.7) {
        audio.src = 'skor tengah.mp3';
        giftVideo.style.display = 'block'; 
        giftVideo.muted = true;   
        giftVideo.play();  
        birthdayMessage.style.display = 'block';  
    } else {
        audio.src = 'skor tinggi.mp3';
        giftVideo.style.display = 'block';
        giftVideo.muted = true;
        giftVideo.play(); 
        birthdayMessage.style.display = 'block'; 
    }
    audio.play();
});
