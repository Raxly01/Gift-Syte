// scripts/generator.js

document.addEventListener("DOMContentLoaded", () => {
    // Список тёплых фраз и комплиментов
    const wishes = [
        "💛 Иногда ты слишком строга к себе. А я вот вижу перед собой очень добрую и красивую девушку.",
        "🌸 Рядом с тобой я могу чувствовать себя счастливым)",
        "🍫 Спасибо тебе за то, что заботишься обо мне. Даже такие мелочи, как пирожки на прогулке, я очень ценю.",
        "🎵 Мне нравится открывать тебе музыку и узнавать, что нравится тебе.",
        "🦉 Мне кажется, что ты правда совуша - такая же милая и уютная)",
        "🌿 Ты умеешь делать даже самые обычные прогулки особенными.",
        "😊 Почаще улыбайся, улыбка тебе к лицу.",
        "🌼 Ты гораздо красивее, чем себя таковой считаешь... уж я то знаю, о чём говорю)",
        "✨ Мне очень нравится, какая ты искренняя.",
        '💙 Ты "странная", и это делает тебя особенной и замечательной)',
        "🌙 Это так классно, что мы желаем друг другу почти каждый день спокойной ночи",
        "💜 Мне очень повезло встретить именно тебя.",
        "🌊 Мне очень нравится слушать, как ты рассказываешь о своей работе, когда у тебя горят глаза при рассказе о ней."
    ];

    // Находим элементы по ID из твоего HTML
    const generateBtn = document.getElementById('generateMotivationBtn');
    const motivationText = document.getElementById('motivationText');
    const motivationBox = document.getElementById('motivationBox');

    let lastIndex = -1;

    if (generateBtn && motivationText) {
        generateBtn.addEventListener('click', () => {
            // Защита от выпадения одной и той же фразы два раза подряд
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * wishes.length);
            } while (randomIndex === lastIndex && wishes.length > 1);
            
            lastIndex = randomIndex;
            const randomWish = wishes[randomIndex];

            // Анимация лёгкого исчезновения текста при смене
            if (motivationBox) {
                motivationBox.style.opacity = '0';
                motivationBox.style.transform = 'scale(0.98)';
                
                setTimeout(() => {
                    motivationText.textContent = randomWish;
                    motivationBox.style.opacity = '1';
                    motivationBox.style.transform = 'scale(1)';
                }, 150);
            } else {
                motivationText.textContent = randomWish;
            }
        });
    }
});