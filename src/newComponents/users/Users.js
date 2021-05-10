import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css';
import  {getUsers} from "../services/api";

export default function Users() {
    let [singleMan, setSingleMan] = useState({})
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value =>setUsers([...value.data]) )


    }, []);
    const search = (id) => {
        let singleFind = users.find(value => value.id === id);
        console.log(singleFind);
        setSingleMan(singleFind);
    }
    return (
        <div className={'wrap'}>

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
                    singleMan ? (<h2>{singleMan.id}-{singleMan.username}</h2>) : (<div>user not defined</div>)
                }
            </div>
        </div>
    );
}