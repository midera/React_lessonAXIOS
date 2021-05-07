import Users from "./component/users/Users";
import {useState} from "react";

let userArr=[{
    name: 'vasya',
    age: 31,
    status: false,
    city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1
}, {
    name: 'petya',
    age: 30,
    status: true,
    city: 'New York', country: 'USA', street: 'East str', houseNumber: 21
}, {
    name: 'kolya',
    age: 29,
    status: true,
    city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78
}, {
    name: 'max',
    age: 30,
    status: true,
    city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39
}, {
    name: 'anya',
    age: 31,
    status: false,
    city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5
}, {
    name: 'oleg',
    age: 28,
    status: false,
    city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90,
}, {
    name: 'andrey',
    age: 29,
    status: true,
    city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33,
}, {
    name: 'masha',
    age: 30,
    status: true,
    city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1,
}, {
    name: 'olya',
    age: 31,
    status: false,
    city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4,
}, {
    name: 'max',
    age: 31,
    status: true,
    city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45,
}]
function App() {
    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0);
     let [users,setUser]= useState(userArr)
     const del=()=>{
         users.pop();
         setUser([...users])
     }
     return (
         <div>
             <div>
                 counter is{counter}
                 < button onClick={increment}>increment</button>
                 < button onClick={decrement}>decrement</button>
                 < button onClick={reset}>reset</button>

             </div>
             <div>
                 {
                     users.map((value, index) =>
                         <Users key={index}
                                item= {value}
                         />
                     )
                 }
                 <button onClick={del}>delete</button>
             </div>

         </div>
     );

}
export default App;