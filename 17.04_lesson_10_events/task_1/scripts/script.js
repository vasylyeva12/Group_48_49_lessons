// при нажатии на кнопку меняется цвет текста на зеленый

const clickBtn = document.querySelector('.click_btn');
const text = document.querySelector('.text');

clickBtn.addEventListener('click', () => text.style.color = 'green');

// 2. При клике на кнопку в div.container добавляет параграф

const addParBtn = document.querySelector('.add_par_btn');
const parContainer = document.querySelector('.container');

addParBtn.addEventListener('click', () => {


const par = document.createElement('p');
par.innerText = 'Hello';
parContainer.append(par)
});

// 3. Создать два параграфа. При клике на первый параграф, у второго меняется цвет текста на красный и увеличивается шрифт до 20px. При клике на второй параграф, у первого меняется цвет заднего фона на зеленый и цвет текста на белый

const par1 = document.querySelector('.par1')
const par2 = document.querySelector('.par2')

par1.addEventListener('click', ()=> {
       
    par2.style.color = 'red';
    par2.style.fontSize = '20px';
 
})

par2.addEventListener('click', ()=> {
      
    par1.style.backgroundColor = 'green';
    par1.style.color = 'white';
    
})

// 4. При клике на кнопку цвет текста меняется на красный. При повторном клике обратно на черный

const changeColorBtn = document.querySelector('.change_color_btn')
const changeColorText = document.querySelector('.change_color_text')

 //условный оператор

changeColorBtn.addEventListener('click', () =>  {
changeColorText.style.color = changeColorText.style.color = 'black' ? 'red' : 'black'
})

// .toggle()

// changeColorBtn.addEventListener('click', () =>  {
//     changeColorText.classList.toggle('color')
// })  

// 5. При клике на кнопку цвет текста меняется на синий и размер шрифта увеличиваться до 30px. При повторном клике возращать всё, как было

const changeBtn = document.querySelector('.change_btn');
const changeSize = document.querySelector('.change_size');

changeBtn.addEventListener('click', () => {
    changeSize.classList.toggle('par_change')
})

// 6. При клике на кнопку содержимое инпута выводится в консоль

const showBtn = document.querySelector('.show_btn')
const showInput = document.querySelector('.show_input')

showBtn.addEventListener('click', () => {
console.log(showInput.value);
showInput.value = '';
});

// 7. При клике на кнопку содержимое инпута меняется на !!!
showBtn.addEventListener('click', () => showInput.value = '!!!');

// 8. При клике на кнопку менять содержимое инпута на значения из массива

const symbols = ['...', '!!!', '+++', '&&&'];
let index = 0;

const change_symbol_btn = document.querySelector('.change_symbol_btn')
const change_symbol_input = document.querySelector('.change_symbol_input')

change_symbol_btn.addEventListener('click', () => {
    change_symbol_input.value = symbols[index++ % symbols.length]
})

// index++ % symbols.length
// 0 % 4 === 0
// 1 % 4 === 1
// 2 % 4 === 2
// 3 % 4 === 3
// 4 % 4 === 0
// 5 % 4 === 1
// 6 % 4 === 2
// 7 % 4 === 3
// 8 % 4 === 0


// 9. При клике на кнопку изменять цвет фона на черный. При повторном клике вернуть белый фон

const change_background = document.querySelector('.change_background');
// const change_body = document.querySelector('body')

change_background.addEventListener('click', ()=> 
    document.body.classList.toggle('color_black')
)

// ДЗ
// 1. При клике на кнопку менять цвет заднего фона на цвет из массива ['pink', 'green', 'blue']
// 2. *При клике на кнопку менять цвет заднего фона на случайный

