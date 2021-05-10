import {useEffect, useState} from "react";
import {getPosts} from "../services/api";
import Post from "./post/Post";

export default function Posts() {
    let[posts,setPosts]=useState({});
    let[user,setUser]=useState([])


    useEffect(()=>{
        getPosts().then(value => setPosts([...value]))
    },[]);
const postSearch=(id)=>{
    let postFind=user.find(value => value.id === id);
    console.log(postFind);
    setUser(postFind)
    }
    return (
        <div>

            <div>
                {posts.map((value)=> < Post
                    key={value.id}
                    food={value}
                    postSearch={postSearch}
                    />)
                }

            </div>
        </div>


);
}