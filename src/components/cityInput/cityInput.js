import React, {useState} from 'react';
import './cityInput.css';

const CityInput = () => {
    const [content, setContent] = useState('');
    return(
        <div className='cityInput'>
            <input className='cityInput-input' placeholder='Enter city name...' onChange={(e) => {setContent(e.target.value)}} value={content}/>
            {content && <button className='cityInput-removeContentButton' onClick={(e) => {setContent('')}}></button>}
        </div>
    );
}

export {CityInput}