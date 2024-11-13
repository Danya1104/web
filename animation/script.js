function startAnimation() {
    var canvas = document.getElementById('pic');
    var ctx = canvas.getContext('2d');
    var x = 0;

    function animation() {
        // Очистка холста
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Сохранение состояния холста
        ctx.save();
        ctx.strokeRect(200, 75, 25, 25);

        // Рисуем статичный закрашенный квадрат
        ctx.fillStyle = 'green'; // Устанавливаем цвет заливки
        ctx.fillRect(50, 50, 50, 50); // Рисуем закрашенный квадрат
        ctx.strokeRect(50, 50, 50, 50); // Обводка квадрата (опционально)

        // Рисуем круг
        ctx.beginPath();
        ctx.arc(150, 75, 25, 0, Math.PI * 2, true);
        ctx.stroke();

        // Рисуем анимированный квадрат
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, 150, 50, 50);

        // Восстановление состояния холста
        ctx.restore();

        // Обновление координаты для анимации
        x += 1;
        if (x > canvas.width) {
            x = -50; // Возвращаем квадрат в начало
        }

        requestAnimationFrame(animation);
    }

    animation();
}
