const title = document.querySelector('#title');
const menuItems = document.querySelectorAll('.menu-item');
console.log(title);
console.log(menuItems);

const actionButton = document.querySelector('.btn');
const navList = document.querySelector('.menu');
console.log(actionButton);
console.log(navList);

title.textContent = "Привіт, студенти!";
title.style.color = "royalblue";
title.style.textTransform = "uppercase";

const secondItem = document.querySelectorAll('.menu-item')[1];
secondItem.style.backgroundColor = "#ff9090ff";
secondItem.style.fontSize = "18px";

actionButton.classList.toggle('hidden');
console.log(actionButton.classList);

title.setAttribute('data-version', '1.0');
console.log(title.dataset.version);

const link = document.createElement('a');
link.setAttribute('href', 'http://vcnuft.vn.ua/');
link.textContent = 'Перейти на сайт коледжу';
document.body.append(link);

const paragraph = document.createElement('p');
paragraph.textContent = 'Цей елемент створено динамічно.';
document.body.append(paragraph);
setTimeout(() => {
    paragraph.remove();
}, 5000);

const footer = document.createElement('footer');
footer.textContent = 'Розробник: Гілевич Іван';
document.body.append(footer);
footer.addEventListener('dblclick', () => {
    footer.remove();
});

actionButton.innerHTML += ' <strong>Натисніть ТУТ</strong>';
console.log(actionButton.innerHTML);

title.insertAdjacentHTML("afterend", "<h2>Тема заняття: DOM</h2>");
navList.insertAdjacentHTML("beforebegin", '<p style="font-style: italic;">Список навігації:</p>');