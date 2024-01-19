
const envelope = document.querySelector('.envelope-wrapper');
const audio = document.getElementById('myAudio');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap')
    envelope.classList.toggle('myAudio');

if (audio.paused) {
    audio.play();
} else {
    audio.pause();
    }
});
