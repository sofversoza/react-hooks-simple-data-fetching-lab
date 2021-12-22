import React, { useEffect, useState } from 'react'

function App() {
    const [dogPic, setDogPic] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setDogPic(data.message)
        })
    }, []);    // empty dependencies so we only fetch once
    
    if (!dogPic) {
        return <p>Loading...</p>
    }

    return (
        <img src={dogPic} alt={'A Random Dog'} />
    )
}

export default App


