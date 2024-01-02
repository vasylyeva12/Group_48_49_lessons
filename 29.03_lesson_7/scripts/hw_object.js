// Дан массив с товарами. Для каждого товара создать карточку (title, price). Стилизовать карточку. Если товар есть на скдаже, то цвет заднего фона зеленый, если нет, то серый.

const products = [
    {
        id: 1,
        title: 'Apple',
        price: 100,
        in_stock: true,
        photo: 'https://pngimg.com/d/apple_PNG12509.png'
    },
    {
        id: 2,
        title: 'Orange',
        price: 200,
        in_stock: false,
        photo: 'https://www.pngall.com/wp-content/uploads/2016/05/Orange.png'

    },
    {
        id: 3,
        title: 'Kiwi',
        price: 150,
        in_stock: true,
        photo: 'https://static.vecteezy.com/system/resources/previews/008/530/509/original/kiwi-fruit-cutout-file-png.png'
    },
    {
        id: 4,
        title: 'Banana',
        price: 300,
        in_stock: false,
        photo: 'https://pngicon.ru/file/uploads/banan.png'
    },
    {
        id: 5,
        title: 'Pinneapple',
        price: 400,
        in_stock: false,
        photo: 'https://pngicon.ru/file/uploads/ananas-na-prozrachnom-fone.png'        
    }
]

const cards_container = document.querySelector('.cards_container');

products.forEach(({title, price, in_stock, photo}) => { // products.forEach(el) => { - без реструктуризации
    // const {title, price} = el; //деструктуризация
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p'); 
    const photoElem = document.createElement('img')

    titleElem.innerText = `Title: ${title}`; //деструктуризация
    priceElem.innerText = `Price: ${price}`; //деструктуризация
    

    cardElem.classList.add('cardElem');
    cardElem.style.backgroundColor = in_stock ? 'lightgreen' : 'lightgray';

    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', title);



    cardElem.append(photoElem, titleElem, priceElem);
    cards_container.append(cardElem);

});




