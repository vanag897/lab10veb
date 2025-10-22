const title = document.querySelector('#title');
const menuItems = document.querySelectorAll('.menu-item');
const actionButton = document.querySelector('.btn');
const navList = document.querySelector('.menu');

title.textContent = "Привіт, студенти!";
title.style.color = "royalblue";
title.style.textTransform = "uppercase";

const secondItem = menuItems[1];
secondItem.style.backgroundColor = "#fe8686ff";
secondItem.style.fontSize = "18px";

actionButton.classList.toggle('hidden');

title.setAttribute('data-version', '1.0');

const link = document.createElement('a');
link.setAttribute('href', 'http://vcnuft.vn.ua/');
link.textContent = 'Перейти на сайт коледжу';
link.style.display = 'block';
link.style.margin = '10px 0';
document.body.append(link);

const paragraph = document.createElement('p');
paragraph.textContent = 'Цей елемент створено динамічно.';
document.body.append(paragraph);

setTimeout(() => {
    paragraph.remove();
}, 5000);

const footer = document.createElement('footer');
footer.textContent = 'Розробник: Гілевич Іван';
footer.style.marginTop = '20px';
footer.style.cursor = 'pointer';
document.body.append(footer);

footer.addEventListener('dblclick', () => {
    footer.remove();
});

actionButton.innerHTML += ' <strong>Натисніть ТУТ</strong>';

title.insertAdjacentHTML("afterend", "<h2>Тема заняття: DOM</h2>");
navList.insertAdjacentHTML("beforebegin", '<p style="font-style: italic;">Список навігації:</p>');
