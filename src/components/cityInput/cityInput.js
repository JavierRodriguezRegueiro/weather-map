import React, {useState} from 'react';
import './cityInput.css';
import PropTypes from "prop-types";

const CityInput = (props) => {
    const [content, setContent] = useState('');
    let textInput;

    const handleIntro = (e, callback, value) => {
        if (e.keyCode === 13 && typeof callback === 'function') {
            textInput.blur();
            callback(value)
        }
    };

    return (
        <div className='cityInput' onKeyDown={(e) => {
            handleIntro(e, props.callback, content)
        }}>
            <input className='cityInput-input' placeholder='Enter city name...' ref={(input) => {
                textInput = input;
            }} onChange={(e) => {
                setContent(e.target.value)
            }} value={content}/>
            {content && <button className='cityInput-removeContentButton' onClick={(e) => {
                setContent('')
            }}></button>}
        </div>
    );
}

CityInput.propTypes = {
    callback: PropTypes.func.isRequired
};

export {CityInput}