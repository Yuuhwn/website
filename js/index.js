const openButton = document.getElementById('openFeedBack'); 
const modal = document.getElementById('feedbackModal'); 
const closeButton = document.getElementById('close'); 
 
// Открываем модальное окно 
openButton.addEventListener('click', () => { 
    modal.style.display = 'block'; 
}); 
 
// Закрываем модальное окно 
closeButton.addEventListener('click', (event) => {
    event.stopPropagation();  // Останавливаем распространение события
    modal.style.display = 'none';
});
// Закрытие при клике вне модального окна 
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});





const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
})

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


// Стилизация кнопки
scrollToTopBtn.style.backgroundColor = 'white'; // Белый фон
scrollToTopBtn.style.border = '2px solid darkgray'; // Черная граница
scrollToTopBtn.style.borderRadius = '50%'; // Круглые границы
scrollToTopBtn.style.width = '50px'; // Ширина кнопки
scrollToTopBtn.style.height = '50px'; // Высота кнопки
scrollToTopBtn.style.fontSize = '24px'; // Размер эмодзи
scrollToTopBtn.style.position = 'fixed'; // Закрепить кнопку на экране
scrollToTopBtn.style.bottom = '20px'; // Расположение кнопки от низа
scrollToTopBtn.style.right = '450px'; // Расположение кнопки от правого края
scrollToTopBtn.style.display = 'flex';
scrollToTopBtn.style.justifyContent = 'center';
scrollToTopBtn.style.alignItems = 'center';
scrollToTopBtn.style.cursor = 'pointer'; // Курсор при наведении
scrollToTopBtn.style.transition = 'background-color 0.3s'; // Плавное изменение фона

// Эффект при наведении
scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = 'gray'; // Цвет фона при наведении
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = 'white'; // Возвращаем белый фон
});

window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});


