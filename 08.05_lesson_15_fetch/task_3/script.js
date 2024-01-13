// 1. Отправить запрос по ссылке https://dummyjson.com/users и получить массив с данными о пользователях
// 2. Из полученных данных отрисовать карточки пользователей (аватар, имя + фамилия, возраст) image, firstName, lastName, age

// 3. Стилизовать карточки + сделать из контейнера грид
// 4. Отсортировать по возрасту
// 5. Отсортировать по фамилии (в алфавитном порядке)


const container = document.querySelector('.container');

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => render(data.users))


const render = arr => {
    arr
    // .map(el => el)
    .slice()
    .sort((a, b) => a.lastName.localeCompare(b.lastName))
    .forEach(({image, firstName, lastName, age}) => {
        const cardElem = document.createElement('div');
        const imageElem = document.createElement('img');
        const firstNameElem = document.createElement('p');
        const lastNameElem = document.createElement('p');
        const ageElem = document.createElement('p');
      

        imageElem.src = image;
        imageElem.alt = `${firstName} ${lastName}`;
        firstNameElem.innerText = `First name: ${firstName}`;
        lastNameElem.innerText = `Lasrst name: ${lastName}`;
        ageElem.innerText = `${age}`


        cardElem.append(imageElem, firstNameElem, lastNameElem, ageElem);
        container.append(cardElem)

        
    });
}