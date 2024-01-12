// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/products
// 2. Вывести полученные по запросу данные (массив products) в консоль
// 3. В container отрисовать карточки продуктов (images, title, price), у которых цена >= 500
// 4. Если у товара рейтинг >= 4.5, то цвет заднего фона у этого товара сделать светло-зеленым. А если меньше - то светло-желтым

const container = document.querySelector('.container')

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => render(data.products))

const render = arr => {
    arr.forEach(({images, title, price, rating}) => {
        const cardElem = document.createElement('div');
        const imagesElem = document.createElement('img');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');
        const ratingElem = document.createElement('p');

        // price => 500 ? price : ""
        cardElem.style.backgroundColor = rating >= 4.5 ? 'lightgreen' : 'lightyellow';
        

        imagesElem.src = images;
        imagesElem.alt = title;
        titleElem.innerText = title;
        priceElem.innerText = `$${price}`
        ratingElem.innerText = rating


        cardElem.append(imagesElem, titleElem, priceElem, ratingElem);
        container.append(cardElem)

    })  
   
}