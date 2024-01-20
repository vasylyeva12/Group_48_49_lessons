
import './App.css';
import User from './components/User';

function App() {

  const users = [
  {

    id: 1,
    firstname: 'Oleg',
    lastname:'Smirnov',
    age: 54
  },
  {
    id: 2,
    firstname: 'Valera',
    lastname:'Vasyliev',
    age: 47
  },
  {
    id: 3,
    firstname: 'Lida',
    lastname:'Melnik',
    age: 28
  },
  {
    id: 4,
    firstname: 'Sacha',
    lastname:'Melnikov',
    age: 45
  }
]

  return (
    <div>
     {
      users
      .filter(el => el.age > 30)
      .map(el => <User firstname={el.firstname} lastname={el.lastname}  age={el.age} key={el.id} />)
     }
    </div>
  );
}

export default App;
