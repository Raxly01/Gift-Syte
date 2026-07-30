// scripts/ball.js

document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById('magic-ball');
    const message = document.getElementById('ball-message');

    // Фразы и ответы Магического шара
    const ballPredictions = [
    "В этом году ты будешь улыбаться ещё чаще. Я постараюсь этому помочь)",
    "Одна милая совушка заслуживает как минимум миллион объятий.",
	"Даже самая капризная техника на ГЭС будет бояться ломаться при тебе",
    "Твоё самое заветное желание исполнится, если ты в него поверишь.",
    "Впереди будет много уютных прогулок, интересных мест и счастливых моментов.",
    "Впереди ещё много музыки и фильмов, которые мы будем открывать друг другу.",
    "Тревог станет меньше, а спокойствия — больше.",
    "Ты заслуживаешь слышать комплименты гораздо чаще.",
];

    let isPredicting = false;

    if (ball && message) {
        ball.addEventListener('click', () => {
            if (isPredicting) return;

            isPredicting = true;
            ball.classList.add('predicting');
            message.style.opacity = '0'; // Плавно прячем старый текст

            // Задержка 1 секунда для эффекта "магического думания"
            setTimeout(() => {
                const randomText = ballPredictions[Math.floor(Math.random() * ballPredictions.length)];
                message.textContent = randomText;
                message.style.opacity = '1';
                ball.classList.remove('predicting');
                isPredicting = false;
            }, 1000);
        });
    }
});