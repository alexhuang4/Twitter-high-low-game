import React, {useEffect, useState} from "react";

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/user2');
        const items = await data.json();
        setItems(items);
    }

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);

    return(
        <div>
            <p>Username: {items.username}</p>
            <p>Full Name: {items.fullname}</p>
            <div>
                {!hidden ? <p>Second User Follower Counter: {items.followers}<br></br>You chose higher!</p> : null}
                <button onClick={() => setHidden(s => !s)}>
                    HIGHER
                </button>
                {!hidden2 ? <p>Second User Follower Counter: {items.followers}<br></br>You chose lower!</p> : null}
                <button onClick={() => setHidden2(s => !s)}>
                    LOWER
                </button>
            </div>
        </div>
    )
}

export default Tweet;