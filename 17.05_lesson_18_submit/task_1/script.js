// 1. Создать форму (в html) с тремя полями - имя, фамилия, возраст
// 2. При сабмите формы данные из формы собираются, формируется объект (id, firstname, lastname, age) и добавляется в массив all_workers
// 3. Отрисовать карточки из массива all_workers
// 4. В форму добавить поля для сбора ссылки на аватар и электронную почту
// 5. Отрисовать новые данные в карточке работника
// 6. Создать кнопку удаления всех карточек
// 7. В каждой карточке добавить крестик, который виден только при наведении курсора на карточку. При клике на крестик удаляется карточка

const add_workers_form = document.querySelector('.add_workers_form');
const workers_container = document.querySelector('.workers_container')
const delete_btn = document.querySelector('.delete_btn')

let all_workers = [];

add_workers_form.addEventListener('submit', event => {
    event.preventDefault()
    const{avatar, firstname, lastname, age, email} = event.target;

    
    const worker = {
        id: Date.now(),
        avatar: avatar.value,
        firstname: firstname.value,
        lastname: lastname.value,
        age: +age.value,
        email: email.value

    }
    all_workers.push(worker);
    render_cards(all_workers);

    console.log(all_workers);

    event.target.reset()
})

const render_cards = workers => {
    workers_container.innerText = '';
    workers.forEach(({id, avatar, firstname, lastname, age, email}) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');    
    const avatarElem = document.createElement('img');
    const emailElem = document.createElement('a');
    const ageElem = document.createElement('p');
    const deleteElem = document.createElement('span')

    
    nameElem.innerText = `Name: ${lastname} ${firstname}`   
    ageElem.innerText = `Age: ${age}`
    emailElem.innerText = email
    deleteElem.innerText = 'X'

    avatarElem.src = avatar;
    avatarElem.alt = `${lastname}`
    emailElem.href = `mailto: ${email}`

    deleteElem.addEventListener('click', () => {
        all_workers = all_workers.filter(el => el.id !== id);
        render_cards(all_workers)
      });

      cardElem.classList.add('cardElem');

    cardElem.append(deleteElem, avatarElem, nameElem, ageElem, emailElem)
    workers_container.append(cardElem)

})

}

delete_btn.addEventListener('click', () => {
    all_workers = []
    render_cards(all_workers)
})

