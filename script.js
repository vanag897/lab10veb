const title = document.querySelector('#title');
const menuItems = document.querySelectorAll('.menu-item');
const actionButton = document.querySelector('.btn');
const navList = document.querySelector('.menu');

console.log(title);
console.log(menuItems);
console.log(actionButton);
console.log(navList);

title.textContent = "Привіт, студенти!";
title.style.color = "tomato";
title.style.textTransform = "uppercase";

const secondItem = menuItems[1];
secondItem.style.backgroundColor = "#f0f0f0";
secondItem.style.fontSize = "18px";

const firstItem = menuItems[0];
firstItem.classList.add('active');
console.log(firstItem.classList.contains('active'));

actionButton.classList.toggle('hidden');
console.log(actionButton.classList);

title.setAttribute('data-version', '1.0');
console.log(title.dataset.version);

const link = document.createElement('a');
link.setAttribute('href', 'https://vcnuft.vn.ua');
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

navList.innerHTML += '<li class="menu-item">Новий пункт</li>';

actionButton.innerHTML += ' <strong>Натисніть ТУТ</strong>';
console.log(actionButton.innerHTML);

title.insertAdjacentHTML("afterend", "<h2>Тема заняття: DOM</h2>");
