document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');
    const icon = document.getElementById('music-icon');
    const volumeSlider = document.getElementById('volume-slider');

    // 1. Устанавливаем громкость по умолчанию на 20% (0.2)
    if (audio && volumeSlider) {
        audio.volume = 0.2;
        volumeSlider.value = 0.2;

        // Обработка движения ползунка громкости
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value;
            
            // Если ползунок сдвинули на 0 — меняем иконку
            if (audio.volume === 0) {
                icon.textContent = '🔇';
            } else if (!audio.paused) {
                icon.textContent = '🎶';
            } else {
                icon.textContent = '🎵';
            }
        });
    }

    // 2. Включение / выключение музыки по клику на кнопку
    if (btn && audio) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleAudio();
        });
    }

    // 3. Автозапуск при первом взаимодействии с сайтом
    const startOnFirstInteraction = () => {
        if (audio && audio.paused) {
            audio.play().then(() => {
                btn.classList.add('playing');
                icon.textContent = '🎶';
            }).catch(() => {
                // Автозапуск заблокирован браузером до первого клика
            });
        }
        document.removeEventListener('click', startOnFirstInteraction);
        document.removeEventListener('scroll', startOnFirstInteraction);
    };

    document.addEventListener('click', startOnFirstInteraction);
    document.addEventListener('scroll', startOnFirstInteraction);

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            btn.classList.add('playing');
            icon.textContent = audio.volume === 0 ? '🔇' : '🎶';
        } else {
            audio.pause();
            btn.classList.remove('playing');
            icon.textContent = '🎵';
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('birthday-video');
    const bgAudio = document.getElementById('bg-music');

    if (video) {
        // 1. Устанавливаем громкость видео на 20% (0.2)
        video.volume = 0.2;

        // 2. БОНУС: Ставим фоновую музыку на паузу, когда Юля запускает видео
        video.addEventListener('play', () => {
            if (bgAudio && !bgAudio.paused) {
                bgAudio.pause();
                const musicBtn = document.getElementById('music-toggle');
                const musicIcon = document.getElementById('music-icon');
                if (musicBtn) musicBtn.classList.remove('playing');
                if (musicIcon) musicIcon.textContent = '🎵';
            }
        });
    }
});