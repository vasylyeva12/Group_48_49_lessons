
const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
// .then(json => console.log(json))
.then(data => render(data))

const render = arr => {
    arr.forEach(({name, username, email, address}) => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const userNameElem = document.createElement('p');
        const emailElem = document.createElement('a')
        const addressElem = document.createElement('p')

        nameElem.innerText = name;
        userNameElem.innerText = username;
        emailElem.innerText = email;
        addressElem.innerText = address;

        cardElem.style.border = '1px solid #8e44ad';
        cardElem.style.width = '200px';

        cardElem.append(nameElem, userNameElem, emailElem, addressElem);
        container.append(cardElem);        
    });
}