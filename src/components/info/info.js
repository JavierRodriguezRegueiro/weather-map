import React from 'react';
import './info.css';
import {connect} from "react-redux";

export const Info = (props) => {
    return (
        <section className='info'>
            <InfoElement title='Summary' information={props.summary}/>
            <InfoElement title='Temperature' information={props.tmp + ' °C'}/>
            <InfoElement title='Precipitation probability' information={props.precProb + '%'}/>
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

const MapStateToProps = (state) => {
    return {
        summary: state.summary,
        tmp: state.tmp,
        precProb: state.precProb
    }
};

export default connect(MapStateToProps)(Info);
