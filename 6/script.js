// Текущая дата и день недели
function getRussianDate() {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота","Воскресенье"];
    const now = new Date();
    const formattedDate = `Сегодня: ${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()}, день недели - ${days[now.getDay()]}`;
    document.getElementById("date").textContent = formattedDate;
}

// Дата последней модификации
document.getElementById("modification-date").textContent = "Дата последней модификации документа: " + document.lastModified;

// Часы в реальном времени
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").value = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

// Афоризм дня
const aphorisms = [
    "Плохое имя метода сродни предвыборным обещаниям политиков. Вроде о чем-то оно говорит, но если задуматься — непонятно о чем. (C. MacConnell)",
    "Чтобы понять алгоритм, нужно его увидеть. (Donald Knuth)",
    "Если оптимизировать всё, что можно, то вы будете вечно несчастным. (Donald Knuth)",
    "Мы не можем перекладывать свои ошибки на используемые технологии. (Tim Berners-Lee)",
    "Афоризмы пропускают подробности и выделяют главное: это превосходная документация высокого уровня. (Алан Джей Перлис)",
    "То, что для одного человека константа, для другого — переменная. (Алан Джей Перлис)",
    "Простота не предшествует сложности, а вытекает из нее. (Алан Джей Перлис)",
    "Бумажная цифра — мертвая цифра, а цифра в электронной форме способна рождать мысли и действия. (Bill Gates)",
    "Когда в компанию приходит один умный человек, вскоре появляется и другой — талантливые люди любят работать в кругу себе равных. (Bill Gates)"
];
const randomAphorism = aphorisms[Math.floor(Math.random() * aphorisms.length)];
document.getElementById("aphorism").textContent = randomAphorism;

// Информация о браузере
const browserInfo = `Имя программы: ${navigator.appName}, Версия: ${navigator.appVersion}, Заголовок пользовательского агента: ${navigator.userAgent}`;
document.getElementById("browser-info").textContent = browserInfo;

// Навигация по истории
document.getElementById("prevPage").onclick = function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение ссылки
    history.back(); // Возвращаемся на предыдущую страницу
};

document.getElementById("nextPage").onclick = function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение ссылки
    history.forward(); // Переходим на следующую страницу
};

// Вызов функций
getRussianDate();
