// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/photos
// 2. Вывести полученные по запросу данные в консоль
// 3. В container отрисовать карточки фотографий (url, title, albumId) из полученных по запросу данных
// 4. Вывести карточки только тех фотографий, чей albumId входит в список 3, 7, 43, 59, 32, 94. Использовать метод includes()

const fotos_container = document.querySelector('.fotos_container');

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => render(data))

const render = arr => {

arr.forEach(({url, title, albumId}) => {
    if ([3, 7, 43, 59, 32, 94].includes(albumId)) {
// берем albumId каждой карточки, если albumId входит в список 3, 7, 43, 59, 32, 94, тогда мы проделыеваем все, что написано ниже.
    
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('p');
    const albumIdElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    albumIdElem.innerText = `Album ID: ${albumId}`;
    imgElem.src = url;
    imgElem.alt = title;
    

    cardElem.append(imgElem, titleElem, albumIdElem);
    fotos_container.append(cardElem)

    }
})
}
