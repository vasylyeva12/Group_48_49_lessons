//1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://dummyjson.com/users/{id} и выводящую полученные данные в консоль
//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + фамилия, username, ) firstName lastName

const container = document.querySelector('.container')
const [btn1, btn2] = document.querySelectorAll('.triggers button')

let id_num = 1

const getUsers = id => {
    fetch(`https://dummyjson.com/users/${id}`)
.then(res => res.json())
.then(data => render(data))
}
getUsers(4)

const render = ({lastName, firstName, username, email, address}) => {   
    container.innerText = '';
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('h2');
        const usernameElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const addressElem = document.createElement('p')
        

        nameElem.innerText = `Name: ${firstName} ${lastName}`;
        usernameElem.innerText= `User name: ${username}`;
        emailElem.innerText = `Email: ${email}`;
        addressElem.innerText = `Address: ${address.address}`
 

        // emailElem.setAttribute('href', `mailto: ${email}`)
        emailElem.href = `mailto: ${email}`

        cardElem.style.border = '2px solid rgb(108, 92, 231)';
        cardElem.style.backgroundColor = 'rgb(223, 249, 251)';
        cardElem.style.width = '300px'
        cardElem.style.padding = '30px 50px'
        btn1.style.backgroundColor = 'rgb(0, 184, 148)';
        btn2.style.backgroundColor = 'rgb(0, 184, 148)';


        cardElem.append(nameElem, usernameElem, emailElem, addressElem)
        container.append(cardElem);
    }

btn1.addEventListener('click', () => getUsers(++id_num))
btn2.addEventListener('click', () => getUsers(--id_num))



