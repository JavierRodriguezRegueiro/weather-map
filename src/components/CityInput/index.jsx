import React, {useState} from 'react';
import './CityInput.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const CityInput = (props) => {
    return(
        <CityInputContainer {...props} />
    );
}

const CityInputContainer = ({loading, callback}) => {
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
            handleIntro(e, callback, content)
        }}>
            <input className='cityInput-input' placeholder='Enter city name...' ref={(input) => {
                textInput = input;
            }} onChange={(e) => {
                setContent(e.target.value)
            }} value={content}/>
            {content && !loading && <button className='cityInput-removeContentButton' onClick={(e) => {
                setContent('')
            }}/>}
            {loading && <div className='cityInput-loading'/>}
        </div>
    );
}

CityInput.propTypes = {
    callback: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

CityInput.defaultProps = {
    loading: false
}

const MapStateToProps = ({statusReducer}) => {
    return {
        loading: statusReducer.loading
    }
};
export default connect(MapStateToProps)(CityInput);