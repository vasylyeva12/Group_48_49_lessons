// 1. Создать форму. При сабмите данные из инпута собираются и выводятся в консоль
// 2. Написать функцию, которая принимает числовой аргумент (id) и отправляет fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/{id}
// 3. По полученным данным отрисовать карточку пользователя
// 4. При клике на карточку менять цвет ее заднего фона на светло-зеленый
// 5. Повесить на каждую карточку крестик и реализовать удаление карточки по клику

const get_user_form = document.querySelector('.get_user_form')
const container = document.querySelector('.container')

let all_users = []

get_user_form.addEventListener('submit', event => {
    event.preventDefault()
    const {id} = event.target
    getUserId(id.value)

    event.target.reset()  
    
})

const getUserId = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => add_users(data))    
}

const add_users = json => {
    all_users.push(json)
    render_users(all_users)
}

const render_users = users => {
    container.innerText = ''
  users.forEach (({name, email, address}) => {
    
    const cardElem = document.createElement('div')
    const nameElem = document.createElement('p')
    const emailElem = document.createElement('p')
    const addressElem = document.createElement('p')
    const deleteElem = document.createElement('span')
  
    const {street, suite, city, zipcode } = address;
    nameElem.innerText = name
    addressElem.innerText = `Address: ${street} ${suite} ${city} ${zipcode}`
    emailElem.innerText = email
    emailElem.href = `mailto:${email}`
    deleteElem.innerText = 'X'

    cardElem.append(deleteElem, nameElem, addressElem, emailElem )
    container.append(cardElem)

    cardElem.addEventListener('click', () => {
        cardElem.style.backgroundColor = 'green'
    })

    cardElem.addEventListener('click', () => {
        all_users = all_users.filter(el => el.id !== id);
        render_users(all_users)
    })
})
}


// const render =  ({name, email, address}) => {
    
//         const cardElem = document.createElement('div')
//         const nameElem = document.createElement('p')
//         const emailElem = document.createElement('p')
//         const addressElem = document.createElement('p')
//         const deleteElem = document.createElement('span')
      
//         const {street, suite, city, zipcode } = address;
//         nameElem.innerText = name
//         addressElem.innerText = `Address: ${street} ${suite} ${city} ${zipcode}`
//         emailElem.innerText = email
//         emailElem.href = `mailto:${email}`
//         deleteElem.innerText = 'X'

//         cardElem.append(deleteElem, nameElem, addressElem, emailElem )
//         container.append(cardElem)

//         cardElem.addEventListener('click', () => {
//             cardElem.style.backgroundColor = 'green'
//         })

//         cardElem.addEventListener('click', () => {
//             deleteElem.filter(el => el.id !== id);
            
//         })

    // }


