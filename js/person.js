const dataContainer = document.getElementById('dataContainer');
const addPersonForm = document.getElementById('addPersonForm');
const persons = []; // Исправлено: изменено на множественное число для ясности

// Функция для загрузки данных из JSON файла
async function loadData() {
    try {
        const response = await fetch('js/person.json'); // подключение к JSON
        const data = await response.json(); // преобразование в объект
        persons.push(...data); // добавление данных из JSON
        displayData(persons); // отображение данных
        console.log(persons);  // Проверим, что данные загружены в массив

    } catch (error) {
        console.error('Ошибка загрузки данных', error);
    }
}

// Функция для отображения данных на веб-странице
function displayData(data) {
    dataContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных
    data.forEach((person) => {
        // Создание карточки
        const card = document.createElement('div');
        card.className = 'card';

        // Добавление фото
        const img = document.createElement('img');
        img.src = person.photo || 'path/to/default-photo.jpg'; // Добавлен fallback для фото
        img.alt = person.name || 'Фото отсутствует';

        // Добавление имени
        const name = document.createElement('h3');
        name.textContent = person.name || 'Имя не указано';

        // Добавление возраста
        const age = document.createElement('p');
        age.textContent = `Возраст: ${person.age || 'не указан'}`;

        // Добавление email
        const email = document.createElement('p');
        email.textContent = `Почта: ${person.email || 'не указана'}`;

        // Добавляем элементы в карточку
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(email);

        // Добавляем карточку в контейнер
        dataContainer.appendChild(card);
    });
}

// Событие на submit
addPersonForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    const newPerson = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        photo: document.getElementById('photo').value || 'path/to/default-photo.jpg',
    };
    persons.push(newPerson); // Добавляем нового человека в массив
    displayData(persons); // Обновляем отображение данных
    addPersonForm.reset(); // Сбрасываем форму
});

// Загрузка данных
loadData();
