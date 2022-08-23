/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('input');
const writeItem = document.querySelector('.items');

sendInput.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    const itemText = sendInput.value;

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.textContent = itemText;
    newItem.addEventListener('click', function () {
      newItem.classList.toggle('done');
    });

    if (itemText != '') {
      writeItem.prepend(newItem);
    }

    sendInput.value = '';
  }
});