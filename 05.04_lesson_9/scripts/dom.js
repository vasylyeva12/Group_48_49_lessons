// Дан массив users. 
// 1. Для каждого объекта сформировтаь карточку пользователя с именем + фамилия и возрастом
// 2. Стилизовать карточки (border, border-radius, padding). А из контейнера сделать flex-контейнер
// 3. Добавить каждому пользователю почту и сделать ее кликабельной
// 4. Добавить каждому пользователю аватар.
// 5. Стилизовать аватар - сделать размеры 150х150px (без деформации изображения)
// 6. Если возраст пользователя >= 18 и имя пользователя начинается на букву a/A, то покрасить цвет заднего фона карточки в светло-розовый. Всем остальным сделать цвет заднего фона карточки - светло-голубой


const users = [
    {
      id: 1,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      age: 55,
      progress: 10
    },
    {
      id: 2,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 73,
      progress: 40
    },
    {
      id: 3,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      age: 15,
      progress: 25
    },
    {
      id: 4,
      email: "anna.ivanova@reqres.in",
      first_name: "Anna",
      last_name: "Ivanova",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      age: 18,
      progress: 50
    },
    {
      id: 5,
      email: "anton.petrov@reqres.in",
      first_name: "Anton",
      last_name: "Petrov",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      age: 12,
      progress: 80
    }
  ];

  const container = document.querySelector('.container');

  users.forEach(({first_name, last_name, age, email, avatar, progress}) => {

    const cardElem = document.createElement('div');
    const progressElem = document.createElement('div');
    const progressBarElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const emailTextElem = document.createElement('span');
    const avatarElem = document.createElement('img')
    const barElem = document.createElement('p');


    nameElem.innerText = `${first_name} ${last_name}`;
    ageElem.innerText = `Age: ${age}`;
    emailTextElem.innerText = `Напишите мне: `;
    emailElem.innerText = email;
    barElem.innerText = progress + '%';

    // emailElem.setAttribute('href', `mailto: ${emailElem}`) первый вариант добавления email 
    emailElem.href = `mailto: ${emailElem}`;
    avatarElem.src = avatar;
    avatarElem.alt = `${first_name} ${last_name}`;
   // avatarElem.setAttribute('src', avatar)
    //avatarElem.setAttribute('alt', last_name )

    cardElem.classList.add('card');
    progressElem.classList.add('progress-bar-success');
    progressBarElem.classList.add('progress-bar');


    cardElem.style.background = age >=18 && first_name[0].toLowerCase() === 'a' ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,91,0.5368522408963585) 74%, rgba(0,212,255,1) 100%)' : 'lightblue'
    progressBarElem.style.width = progress + '%';

    cardElem.append(avatarElem, nameElem, ageElem, emailTextElem, emailElem, progressElem);
    progressElem.append(progressBarElem, barElem)
    container.append(cardElem)


  })

