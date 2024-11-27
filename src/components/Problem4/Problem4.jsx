import './Problem4.css';
import { useState, useMemo } from 'react';

// create a paragraph generator which takes length of words in paragraph and generate paragraph.

const Problem4 = () => {
    const [length, setLength] = useState(0);
    const [flag, setFlag] = useState(0);
    const [paragraph, setParagraph] = useState('');

    useMemo(() => {
        let paragraph = '';
        const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet,', 'consectetur', 'adipiscing', 'elit.', 'Vivamus', 'eu', 'sapien', 'nec', 'nisl', 'congue', 'suscipit.', 'Nullam', 'nec', 'magna', 'nec', 'nunc', 'suscipit', 'euismod.', 'Sed', 'vel', 'tincidunt', 'nisl.', 'Vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'Curae;', 'Proin', 'nec', 'nisl', 'ut', 'purus', 'luctus', 'mollis.', 'Sed', 'nec', 'nisl', 'nec', 'nunc', 'suscipit', 'euismod.', 'Sed', 'vel', 'tincidunt', 'nisl.', 'Vestibulum', 'ante', 'ipsum', 'primis', 'in', 'faucibus', 'orci', 'luctus', 'et', 'ultrices', 'posuere', 'cubilia', 'Curae;', 'Proin', 'nec', 'nisl', 'ut', 'purus', 'luctus', 'mollis.'];
        for (let i = 0; i < length; i++) {
            paragraph += words[Math.floor(Math.random() * words.length)] + ' ';
        }
        setParagraph(paragraph);
    }, [flag]);

    return (
        <div className="problem4">
            <h2>Pera Generator</h2>
            <div className='inputs'>
                <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
                <button onClick={() => setFlag(Math.random())}>Generate Paragraph</button>
            </div>
            {flag && length > 0 && <p className='paragraph'>{paragraph}</p>}
        </div>
    );

}

export default Problem4;