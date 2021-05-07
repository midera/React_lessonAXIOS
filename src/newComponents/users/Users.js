import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'
export default function Users() {
    let [singleMan,setSingleMan] = useState({})
    let[users,setUsers]=useState([]);

   useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
           .then((value) => value.json())
           .then(value => {
               setUsers([...value])
           })
   },[]);
const search=(id)=>{
    let singleFind =users.find(value => value.id===id);
    console.log(singleFind);
    setSingleMan(singleFind);
}
    return (
        <div>
        <div className={'users-box'}>
            {
                users.map((value) => <User
                    key={value.id}
                    item={value}
                    search={search}
                />)
            }
        </div>
            <div className={'single-box'}>
                {
                 singleMan ? (<h2>{singleMan.id}-{singleMan.username}</h2>):(<div>user not defined</div>)
                }
            </div>
        </div>
    );
}