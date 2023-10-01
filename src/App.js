import React, { useEffect, useState } from 'react'
import './App.css'


function App() { 
const [gitHubData, setGitHubData] = useState({})


useEffect(() => {
    fetch('https://api.github.com/users/J-Diaz007')
    .then(res => res.json())
    .then(data => {
        setGitHubData(data)
    })
}, [])

return (
    <div className="App">
        <h1>Github Profile Info:</h1>
        <h2>{gitHubData.login}</h2>
        <a href={gitHubData.html_url}><button>Link To GitHub profile</button></a>
    </div>
);
}

export default App
    