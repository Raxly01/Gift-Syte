// Ждем, пока вся страница полностью загрузится
document.addEventListener("DOMContentLoaded", () => {
    
    const owl = document.getElementById("interactive-owl");
    const owlSound = document.getElementById("owl-sound");

    if (owl && owlSound) {
        owl.addEventListener("click", () => {
            // Сбрасываем время воспроизведения звука на начало (чтобы можно было кликать быстро подряд)
            owlSound.currentTime = 0;
            
            // Воспроизводим уханье
            owlSound.play().catch(error => {
                console.log("Браузер заблокировал автовоспроизведение звука. Нужен хотя бы один клик по экрану до этого.");
            });

            // Добавляем класс анимации вздрагивания
            owl.classList.add("active");

            // Удаляем класс анимации после завершения, чтобы её можно было запустить снова при следующем клике
            setTimeout(() => {
                owl.classList.remove("active");
            }, 400); // 400ms — длительность анимации hoot-bounce в CSS
        });
    }

});