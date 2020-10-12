import React, {useState} from 'react';
import './CityInput.css';
import PropTypes from "prop-types";
import {connect} from "react-redux";

export const CityInput = (props) => {
    return(
        <CityInputContainer {...props} />
    );
}

CityInput.propTypes = {
    callback: PropTypes.func.isRequired,
    variantClass: PropTypes.string,
    loading: PropTypes.bool
};

CityInput.defaultProps = {
    variantClass: '',
    loading: false
}

const CityInputContainer = ({loading, callback, variantClass}) => {
    const [content, setContent] = useState('');
    let textInput;

    const handleIntro = (e, callback, value) => {
        if (e.keyCode === 13 && typeof callback === 'function') {
            textInput.blur();
            callback(value)
        }
    };

    const handleClassName = () => {
        return `cityInput ${variantClass}`
    }
    return (
        <div className={handleClassName()} onKeyDown={(e) => {
            handleIntro(e, callback, content)
        }}>
            <input className='cityInput-input' readOnly={loading} placeholder={'Enter city name...'} ref={(input) => {
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

CityInputContainer.propTypes = {
    callback: PropTypes.func.isRequired,
    variantClass: PropTypes.string,
    loading: PropTypes.bool
};

CityInputContainer.defaultProps = {
    variantClass: '',
    loading: false
}

const MapStateToProps = ({statusReducer}) => {
    return {
        loading: statusReducer.loading
    }
};

export {CityInputContainer}
export default connect(MapStateToProps)(CityInput);