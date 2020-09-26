import React from 'react';
import './Info.css';
import {connect} from "react-redux";
import {setShowHourlyData} from "../../actions/statusActions/statusActions";
import PropTypes from "prop-types";

export const Info = (props) => {
    return (
        <section className='info'>
            <InfoElement title='Summary' information={props.summary}/>
            <InfoElement title='Temperature' information={props.tmp + ' °C'}/>
            <InfoElement title='Precipitation probability' information={props.precProb * 100 + '%'}/>
            <HourlyButton onClick={() => props.dispatch(setShowHourlyData(true))}/>
        </section>
    );
};

const InfoElement = (props) => {
    return (
        <div className='infoElement'>
            <p className='infoElement-title'>{props.title}</p>
            <p className='infoElement-info'>{props.information}</p>
        </div>
    );
};

const HourlyButton = (props) => {
    return(
        <button className='hourtly' onClick={props.onClick}>
            <div className='hourtly-icon'/>
            <p className='hourly-label'>Hourly</p>
        </button>
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

const MapStateToProps = ({weatherReducer}) => {
    return {
        summary: weatherReducer.summary,
        tmp: weatherReducer.tmp,
        precProb: weatherReducer.precProb
    }
};

export default connect(MapStateToProps)(Info);
