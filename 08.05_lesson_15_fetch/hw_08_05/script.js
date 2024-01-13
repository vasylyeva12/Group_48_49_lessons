//ДЗ
// 1. Отправить запрос по ссылке https://jsonplaceholder.typicode.com/todos
// 2. Из полученных данных отрисовать карточки (title, status) completed
// 3. Если задача выполнена, то в статус записать 'done'. Если не выполнена - 'not done'
// 4. Стилизовать карточки, сделать из контейнера грид
// 5. Если задача выполнена, то покрасить ее в зеленый, а если не выполнена, то в серый

const container = document.querySelector('.container')
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => render(data))

const render = arr => {
    arr
    // .map(el => el.completed === true ? 'done' : 'not done')
    .forEach(({title, completed }) => {
        const cardElem = document.createElement('div');
        const titleElem = document.createElement('p');
        const statusElem = document.createElement('p');
         
        const status_text = completed ? 'done' : ' not done'
        titleElem.innerText = `Title: ${title}`;
        statusElem.innerText = `Status: ${status_text}`;        

        
        cardElem.style.backgroundColor = completed ? 'rgb(46, 204, 113)' : 'rgb(52, 152, 219)'

        cardElem.classList.add('cards_container')

        cardElem.append(titleElem, statusElem);
        container.append(cardElem);
    })

}
