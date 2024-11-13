function handleFormSubmit() {
    const form = document.querySelector('.form-container');
    const surname = form.surname.value;
    const name = form.name.value;
    const login = form.login.value;
    const password = form.password.value;

    // Собираем выбранное время
    const timeElements = document.querySelectorAll('input[name="time"]');
    let selectedTime = '';
    timeElements.forEach((element) => {
        if (element.checked) {
            selectedTime = element.value;
        }
    });

    // Собираем выбранные формы контроля
    const controlElements = document.querySelectorAll('input[name="control"]');
    let selectedControls = [];
    controlElements.forEach((element) => {
        if (element.checked) {
            selectedControls.push(element.value);
        }
    });

    // Получаем выбранный предмет
    const subject = form.subject.value;

    // Получаем дополнительную информацию
    const additionalInfo = form.info.value;

    // Формируем сообщение
    let message = `Фамилия: ${surname}\nИмя: ${name}\nЛогин: ${login}\nПароль: ${password}\n`;
    message += `Выбранное время: ${selectedTime}\n`;
    message += `Форма контроля: ${selectedControls.join(', ')}\n`;
    message += `Выбранный предмет: ${subject}\n`;
    message += `Дополнительная информация: ${additionalInfo}`;

    // Выводим сообщение
    alert(message);

    // Возвращаем false, чтобы предотвратить отправку формы
    return false;
}
