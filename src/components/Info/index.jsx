import React from 'react';
import './Info.css';
import {connect} from "react-redux";
import {setShowHourlyData} from "../../actions/statusActions/statusActions";
import PropTypes from "prop-types";

export const Info = (props) => {
    return (
        <InfoContainer {...props} />
    );
};

Info.propTypes = {
    summary: PropTypes.string.isRequired,
    tmp: PropTypes.number.isRequired,
    precProb: PropTypes.number.isRequired
};

Info.defaultProps = {
    // All props are currently required
}

const InfoContainer = ({summary, tmp, precProb, dispatch}) => {
    return (
        <section className='info'>
            <InfoElement title='Summary' information={summary}/>
            <InfoElement title='Temperature' information={tmp + ' °C'}/>
            <InfoElement title='Precipitation probability' information={precProb * 100 + '%'}/>
            <HourlyButton onClick={() => dispatch(setShowHourlyData(true))}/>
        </section>
    );
}

InfoContainer.propTypes = {
    summary: PropTypes.string.isRequired,
    tmp: PropTypes.number.isRequired,
    precProb: PropTypes.number.isRequired
};

InfoContainer.defaultProps = {
    // All props are currently required
}

const InfoElement = ({title, information}) => {
    return (
        <div className='infoElement'>
            <p className='infoElement-title'>{title}</p>
            <p className='infoElement-info'>{information}</p>
        </div>
    );
};

InfoElement.propTypes = {
    title: PropTypes.string,
    information: PropTypes.string.isRequired
};

InfoElement.defaultProps = {
    title: ''
}

const HourlyButton = ({onClick}) => {
    return (
        <button className='hourtly' onClick={onClick}>
            <div className='hourtly-icon'/>
            <p className='hourly-label'>Hourly</p>
        </button>
    );
};

HourlyButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

HourlyButton.defaultProps = {
    // All props are currently required
}

const MapStateToProps = ({weatherReducer}) => {
    return {
        summary: weatherReducer.summary,
        tmp: weatherReducer.tmp,
        precProb: weatherReducer.precProb
    }
};

export {InfoContainer}
export default connect(MapStateToProps)(Info);
