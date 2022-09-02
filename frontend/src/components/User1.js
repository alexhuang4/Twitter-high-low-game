import React, {useEffect, useState} from "react";

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/user1');
        const items = await data.json();
        setItems(items);
    }

    return(
        <div>
            <p>Username: {items.username}</p>
            <p>Full Name: {items.fullname}</p>
            <p>Follower Counter: {items.followers}</p>
        </div>
    )
}

export default Tweet;