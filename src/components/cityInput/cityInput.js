import React, {useState} from 'react';

const CityInput = () => {
    const [content, setContent] = useState('');
    return(
        <input placeholder='Enter city name...' onChange={(e) => {setContent(e.target.value)}} value={content}/>
    );
}

export {CityInput}