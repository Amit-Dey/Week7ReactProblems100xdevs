// create a birthday wisher site which takes a name of a person and render 2-3 birthday wish cards.

import './Problem7.css';
import { useState, useEffect, useRef } from 'react';



const Problem7 = () => {
    const [name, setName] = useState('');
    const wishList = [
        "Happy Birthday to {name}! May your day be as beautiful as you.",
        "{name}, I hope you have a wonderful day and that the year ahead is filled with much love, many wonderful surprises and gives you lasting memories that you will cherish in all the days ahead. Happy Birthday.",
        "Happy Birthday {name}! I hope you have a great day and that the year ahead is full of fun and adventure.",
        "Many happy returns on your birthday,{name}! I know this past year has had some tough times but I hope that the coming year brings you the good fortune you deserve. You’re a great friend and I am so thankful for your presence in my life.",
        "Happy Birthday {name}! God bless you and keep you, God smile on you and gift you, God look you full in the face and make you prosper."
    ]
    const [wishe, setWishe] = useState('');
    const [error, setError] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setName(e.target.value);
        if (e.target.value === '') {
            setWishe('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setError('Please enter a name');
            setWishe('');
            return;
        }
        setError('');
        const randomWish = wishList[Math.floor(Math.random() * wishList.length)];
        const newWish = randomWish.replace('{name}', name);

        setWishe(newWish);
    }

    return (
        <div className="P7Container">
            <h1>Birthday Wisher</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} value={name} onChange={handleChange} placeholder="Enter name" />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
            {wishe &&
                <div className="wishes">
                    <p>{wishe}</p>
                </div>
            }
        </div>
    )


}

export default Problem7;