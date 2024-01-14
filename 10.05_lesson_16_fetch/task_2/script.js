// 1. Написать функцию, которая принимает в качестве аргумента номер страницы, отправляет запрос по ссылке https://reqres.in/api/users?page={page_num} и выводит в консоль массив с пользователеями
// 2. Написать функцию render, которая из полученных данных отрисует карточки пользователей (фото + имя) и добавить их в container
// 3. В html добавить кнопки 1 и 2 и настроить переключение между страницами по клику на кнопки. По умолчанию при перезагрузке страницы прогружается первая страница

const container = document.querySelector('.container');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');



const getUsers = page_num => {
    fetch(`https://reqres.in/api/users?page=${page_num}`)
    .then(res => res.json())
    .then(data => render(data.data))
}

getUsers(1)

const render = data => {
    container.innerText = '';
    data.forEach(({first_name, last_name, avatar}) => {
        const cardElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const nameElem = document.createElement('p');

        imgElem.src = avatar;
        imgElem.alt = `${first_name} ${last_name}`;
        

        cardElem.append(imgElem, nameElem);
        container.append(cardElem);        
    });
}


btn1.addEventListener('click', () => getUsers(1))
btn2.addEventListener('click', () => getUsers(2))


