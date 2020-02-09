import React from 'react';
import './info.css';

const Info = (props) => {
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

export {Info}