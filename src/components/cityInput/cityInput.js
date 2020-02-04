import React, {useState} from 'react';
import './cityInput.css';

const CityInput = () => {
    const [content, setContent] = useState('');
    return(
        <input className='cityInput' placeholder='Enter city name...' onChange={(e) => {setContent(e.target.value)}} value={content}/>
    );
}

export {CityInput}