let particleInterval;

// 【内容区】俄语全文祝福和署名 Xu
const birthdayMessage = {
    title: "С Днём Рождения, Рита!",
    text: `Сегодня твой 17-й день рождения, и я очень рад(а), что могу отпраздновать его с тобой в этом году.

Мне очень жаль, что я не подготовил(а) для тебя настоящий подарок. Я пытался(лась) что-то отправить,
но не знал(а) как это сделать (╥_╥), поэтому могу подарить тебе только свои слова и искренние пожелания (не сердись на меня).

В этот особенный день я хочу сказать:
Рита, ты очень трудолюбивая, милая и старающаяся девочка.
Ты всегда остаёшься любопытной и стремишься всё исследовать — это редкое и ценное качество.

Не слушай тех, кто говорит:
«Тебе уже семнадцать, тебе нужно быть более взрослой и серьёзной».
Это совсем не так.
Я надеюсь, что ты всегда будешь такой же невинной, яркой и искренней —
ведь это настоящий ты.

От всего сердца желаю, чтобы твои дни были полны солнечного света,
без болезней и плохого настроения ☠️ (ха-ха).
Также желаю, чтобы учёба шла успешно,
и чтобы ты поступила в университет своей мечты.

И я желаю, чтобы твой китайский становился всё лучше —
хотя на самом деле это даже не нужно желать,
потому что я всегда знал(а), что у тебя всё получится.
Ты совсем не глупа — у тебя есть талант,
а усердие — твой величайший дар.

Твой друг,
Xu`
};

function displayMessage() {
    document.getElementById('letter-title').innerText = birthdayMessage.title;
    // 【注意】这里不再有图片逻辑
    document.getElementById('letter-text').innerText = birthdayMessage.text;
}

function openLetter() {
    const envelope = document.getElementById('envelope');
    const modal = document.getElementById('letterModal');
    const song = document.getElementById('birthdaySong');

    envelope.classList.add('open');
    setTimeout(() => {
        modal.classList.add('open');
        displayMessage();
        
        // 尝试播放音乐 (已添加 Autoplay 失败时的处理)
        song.play().catch(error => {
             console.error("Autoplay failed:", error);
        });
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
