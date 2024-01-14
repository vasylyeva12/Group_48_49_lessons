const add_user_form = document.querySelector('.add_user_form');
const container = document.querySelector('.container');
const delete_all_btn = document.querySelector('.delete_all_btn')


let users = [];

add_user_form.addEventListener('submit', (event) => 
{event.preventDefault();

    const {firsrname, age} = event.target;

    const user = {
        id: Date.now(),
        firsrname: firsrname.value,
        age: +age.value
        // age: parseInt.age.value
    }
    
    users.push(user);
    render_cards(users)
  
    event.target.reset();
})

const render_cards = users => {
    container.innerText = '';
    users.forEach(({id, firsrname, age}) => {
        const cardElem = document.createElement('div');
        const firstNameElem = document.createElement('p');
        const ageElem = document.createElement('p')
        const crossIconElem = document.createElement('span');

        firstNameElem.innerText = `Name: ${firsrname}`;
        ageElem.innerText = `Age: ${age}`;
        crossIconElem.innerText = 'X';

        crossIconElem.classList.add('cross_icon')

        crossIconElem.addEventListener('click', () => {
            users = users.filter(el => el.id !== id) //если id не совпадает, он не попадет в новый массив, мы создаем новый массив, кроме той карточки, которую ранее удалии.
            render_cards(users)

        });

        cardElem.append(firstNameElem, ageElem, crossIconElem);
        container.append(cardElem);
        
    });
 }



 delete_all_btn.addEventListener('click', () => {
    users = [];
    render_cards(users) // вызываем функцию рендера заново
 })