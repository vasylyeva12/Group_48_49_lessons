// DOM - document object model

// const greeting = document.querySelector('.greeting');
 const container = document.querySelector('.container');

// greeting.style.color = '#1d295a';
// greeting.style.fontSize = '30px';
// greeting.style.backgroundColor = 'green';


const cardElem = document.createElement('div')
const parName = document.createElement('p');
const parPrice = document.createElement('p');

parName.innerText = 'Title: Milk'
parPrice.innerText = 'Price: 1,09 Euro'

cardElem.style.width = '200px';
cardElem.style.padding = '10px';
cardElem.style.border = '1px solid black';
cardElem.style.borderRadius = '20px';
cardElem.style.textAlign = 'center';

parName.style.color = 'black';
parPrice.style.color = 'black';

parName.style.fontSize = '40px';
parPrice.style.fontSize = '30px';

// par.style.backgroundColor = 'pink';
// par1.style.backgroundColor = 'red';


// container.append(par, par1);

cardElem.append(parName, parPrice);
container.append(cardElem);

// 1. Внутри container создать карточку товара (div). Внутри карточки товара есть два параграфа - название и цена товара. Данные произвольные. Добавить карточке рамку, штрина карточки должна быть равна 200px, padding 10px.



