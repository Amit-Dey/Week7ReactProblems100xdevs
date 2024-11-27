// imports
import { useRef } from 'react';
import './Problem2.css';


// Question.2 : create a background changer in reactJS

const Problem2 = () => {

    const background = useRef(null);


    const changeColor = (color) => {
        return () => {
            background.current.style.backgroundColor = color;
        }
    }

    const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'orange', 'purple'];

    return (
        <div ref={background} className='container' >
            <div className='buttons'>
                {colors.map((color, index) => {
                    return <button key={index} className='button' onClick={changeColor(color)}  style={{ background:color, color: color === 'white'? 'black': 'white' }}>{color.charAt(0).toUpperCase() + color.slice(1)} </button>
                })}
            </div>
        </div>
    );
}

export default Problem2;
