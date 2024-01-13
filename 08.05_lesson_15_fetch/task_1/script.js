// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products/1
// 2. Вывести полученные данные в консоль
// 3. Отрисовать карточку товара (images, title, description, price)
// 4. Стилизовать карточку товара

const container = document.querySelector('.container');

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(data => render(data))

const render = data => {
    const {images, title, description, price} = data; 

        const cardElem = document.createElement('div');
        const imagesElem = document.createElement('img')
        const titleElem = document.createElement('h3');
        const descriptionElem = document.createElement('p');
        const priceElem = document.createElement('p')

        imagesElem.src = images[0];
        imagesElem.alt = title;
        titleElem.innerText = `Title: ${title}`;
        descriptionElem.innerText = `Description: ${description}`;
        priceElem.innerText = `Price: ${price}$`;

        cardElem.classList.add('card_container')

        cardElem.append(imagesElem, titleElem, descriptionElem, priceElem);
        container.append(cardElem);

    }




