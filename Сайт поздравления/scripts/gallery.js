// scripts/gallery.js

document.addEventListener("DOMContentLoaded", () => {
    // === 1. ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ВКЛАДОК ===
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.gallery-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none'; 
            });

            tab.classList.add('active');

            const targetContent = document.getElementById(tab.dataset.tab);
            if (targetContent) {
                targetContent.style.display = 'grid';
                setTimeout(() => {
                    targetContent.classList.add('active');
                }, 10);
            }
        });
    });

    // === 2. ЛОГИКА УВЕЛИЧЕНИЯ ИЗОБРАЖЕНИЙ (LIGHTBOX) ===
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-target-img');
    const closeBtn = document.querySelector('.modal-close');
    const galleryImages = document.querySelectorAll('.card-image-box img');

    // Открытие модального окна при клике на картинку
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex'; // Включаем флекс-контейнер
            modalImg.src = img.src;        // Копируем путь к картинке
            
            // Запускаем плавное появление через микро-таймаут
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    // Функция закрытия окна
    const closeModal = () => {
        modal.classList.remove('show');
        // Ждем окончания CSS-анимации (300мс), прежде чем полностью скрыть элемент
        setTimeout(() => {
            modal.style.display = 'none';
            modalImg.src = ''; // Очищаем адрес картинки
        }, 300);
    };

    // Закрытие при клике на крестик
    closeBtn.addEventListener('click', closeModal);

    // Закрытие при клике на темный фон вокруг картинки
    modal.addEventListener('click', (event) => {
        // Если кликнули именно по фону (modal), а не по самой картинке (modalImg)
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закрытие при нажатии клавиши Esc на клавиатуре (для удобства на ПК)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});