// Using  https://api.github.com/users/${username} API render your GitHub information as your GitHub info Card.

import { useState, useEffect } from 'react';
import './Problem5.css';
const Problem5 = () => {
    const [data, setData] = useState(null);
    const [username, setUsername] = useState('Amit-Dey');
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(setData);
    }, [username]);

    return (
        <div className="container">
            <input type="text" className='input' value={username} onChange={(e) => setUsername(e.target.value)} />
            {data && username.length > 0 ? (
                <div className="GitHubcard">
                    <img src={data.avatar_url} alt="Avatar" />
                    <div className="GitHubcard-body">
                        <h2>{data.name}</h2>
                        <h3>{data.login}</h3>
                        <p>{data.bio}</p>
                        <p>Followers: {data.followers}</p>
                        <p>Following: {data.following}</p>
                        <p>Public Repos: {data.public_repos}</p>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    );
}

export default Problem5;