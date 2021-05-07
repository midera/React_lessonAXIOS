export default function Users({item}) {

    return (
        <div>
            <h2>{item.id}{item.name}-{item.age} </h2>
            <div>
                city-{item.city}
                <br/>
                country-{item.country}
                <br/>
                street-{item.street}
            <br/>
                houseNumber-{item.houseNumber}
            </div>
        </div>
    );
}