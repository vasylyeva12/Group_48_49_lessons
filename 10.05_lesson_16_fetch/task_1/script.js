//1. Написать функцию, принимающую в качестве аргумента id (число), отправляющую fetch-запрос по ссылке https://jsonplaceholder.typicode.com/users/{id} и выводящую полученные данные в консоль
//2. Написать функцию, принимающую полученный объект и отрисовывающую карточку пользователя (имя + телефон)
// 3. Найти кнопки в документе
// 4. Повесить на кнопки слушатели событий. При клике на левую кнопку мы уменьшаем id_num на 1 и отрисовываем новую карточку (вызываем функцию render с обновленным значением id_num). При клике на правую кнопку мы увеличивает id_num на 1 и отрисовываем новую карточку 

const container = document.querySelector('.container');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

let id_num = 1;

const getUser = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(data => render (data))    
}
getUser(id_num)

    const render = ({name, phone}) => {            
            container.innerText = '';
            const infoElem = document.createElement('p');           
            infoElem.innerText = `${name} ${phone}`;         
            
            container.append(infoElem);            
    }

    left_btn.addEventListener('click', () => {
        if(id_num === 1){
            id_num = 11
        }
        getUser(--id_num)
    })

    right_btn.addEventListener('click', () => {
        if(id_num === 10){
            id_num = 0
        }
        getUser(++id_num)
    })


