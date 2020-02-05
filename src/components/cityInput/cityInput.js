import React, {useState} from 'react';
import './cityInput.css';

const CityInput = (props) => {
    const [content, setContent] = useState('');

    const handleIntro = (e, callback, value) => {
        if (e.keyCode === 13 && typeof callback === 'function') {
            callback(value)
        }
    };

    return(
        <div className='cityInput' onKeyDown={(e) => {handleIntro(e, props.callback, content)}}>
            <input className='cityInput-input' placeholder='Enter city name...' onChange={(e) => {setContent(e.target.value)}} value={content}/>
            {content && <button className='cityInput-removeContentButton' onClick={(e) => {setContent('')}}></button>}
        </div>
    );
}

export {CityInput}