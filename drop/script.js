function dragStart(ev) {
      ev.dataTransfer.effectAllowed = 'move'; // Задаем тип операции
      ev.dataTransfer.setData("text/plain", ev.target.id); // Сохраняем ID перетаскиваемого элемента
      ev.dataTransfer.setDragImage(ev.target, 0, 0); // Устанавливаем изображение для перетаскивания
  }
  
function dragEnter(ev)
  {
  var idelt = ev.dataTransfer.getData("Text");
  return true;
  }
  function dragOver(ev)
  {
  var idelt = ev.dataTransfer.getData("Text");
  var id = ev.target.getAttribute('id');
  return false;
  }
  function dragEnd(ev)
  {
  ev.dataTransfer.clearData("Text");
  return true
  }
  function dragDrop(ev) {
      ev.preventDefault(); // Предотвращаем стандартное поведение браузера при сбросе
      const id = ev.dataTransfer.getData("text/plain"); // Получаем ID перетаскиваемого элемента из dataTransfer
      const draggedElement = document.getElementById(id); // Находим элемент по его ID
  
      // Ограничение: черные элементы нельзя возвращать в первый контейнер (черный контейнер)
      if (draggedElement.classList.contains('black') && ev.target.classList.contains('black-container')) {
          alert('Черные элементы нельзя возвращать в первый контейнер.');
          return; // Прекращаем выполнение, если условие выполнено
      }
  
      // Проверка соответствия цвета контейнера для зеленых и синих элементов
      if ((draggedElement.classList.contains('green') && ev.target.classList.contains('green-container')) ||
          (draggedElement.classList.contains('blue') && ev.target.classList.contains('blue-container')) ||
          draggedElement.classList.contains('black')) {
          // Если элемент соответствует цвету контейнера или является черным (может быть перемещен в любой контейнер), перемещаем его
          ev.target.appendChild(draggedElement);
      } else {
          // Если цвет элемента и контейнера не совпадают, показываем предупреждение
          alert('Элемент можно переместить только в контейнер своего цвета.');
      }
  }