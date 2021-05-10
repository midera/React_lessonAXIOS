export default function Post({item,postSearch}) {
    return (
        <div>
            {item.id}
            <button onClick={()=>postSearch(item.id)} >posts</button>
        </div>
    );
}