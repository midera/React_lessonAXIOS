export default function Users(props) {
    let {name, age, isMaried} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isMaried}</p>
        </div>
    );
}
