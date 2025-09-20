let particleInterval;

// 这里是信纸的标题和正文内容，你可以随时编辑
const birthdayMessage = {
    title: "Dear rita,",
    text: "Happy Birthday! May your day be filled with joy and sunshine."
};

function displayMessage() {
    document.getElementById('letter-title').innerText = birthdayMessage.title;
    document.getElementById('letter-text').innerText = birthdayMessage.text;
}

function openLetter() {
    const envelope = document.getElementById('envelope');
    const modal = document.getElementById('letterModal');
    const song = document.getElementById('birthdaySong');

    envelope.classList.add('open');
    setTimeout(() => {
        modal.classList.add('open');
        // 将 displayMessage() 函数的调用提前，确保信纸内容立即显示
        displayMessage();
        song.play();
        song.loop = true;

        const container = document.getElementById('particlesContainer');
        container.style.display = 'block';
        if (!particleInterval) {
            createParticles(20);
            particleInterval = setInterval(() => createParticles(5), 500);
        }
    }, 600);
}

function closeLetter() {
    const modal = document.getElementById('letterModal');
    const envelope = document.getElementById('envelope');
    const song = document.getElementById('birthdaySong');

    modal.classList.remove('open');
    envelope.classList.remove('open');
    song.pause();
    song.currentTime = 0;

    clearInterval(particleInterval);
    particleInterval = null;

    setTimeout(() => {
        document.getElementById('particlesContainer').style.display = 'none';
        document.getElementById('particlesContainer').innerHTML = '';
    }, 500);
}

function createParticles(count) {
    const container = document.getElementById('particlesContainer');
    const emojis = ['🌸', '🌹', '🌷', '🌺', '❤️', '💕', '💖', '✨', '🎉'];
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particle.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        particle.style.opacity = Math.random() * 0.5 + 0.5;
        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, parseFloat(particle.style.animationDuration) * 1000);
    }
}