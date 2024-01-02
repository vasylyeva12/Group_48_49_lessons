// ***
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
// 2. Найти сумму возрастов всех пользователей (.reduce())

const users = [
    {
      id: 1,
      firstname: 'Anton',
      age: 28,
      active: true
    },
    {
      id: 2,
      firstname: 'Irina',
      age: 18,
      active: true
    },
    {
      id: 3,
      firstname: 'Olga',
      age: 32,
      active: false
    },
    {
      id: 4,
      firstname: 'Danila',
      age: 14,
      active: true
    },
    {
      id: 5,
      firstname: 'Ivan',
      age: 54,
      active: false
    }
  ];

  const new_sorted = users.slice().sort((a, b) => a.age - b.age)
  const map_sorted = users.map(el => el).sort((a, b) => a.age - b.age)
  const spread_sorted = [...users].sort((a, b)=> a.age - b.age)

//   console.log(new_sorted);
//   console.log(map_sorted);
//   console.log(spread_sorted);

  const sumAge = users.reduce((acc, el) => acc + el.age, 0)
  console.log(sumAge);
