import React from 'react';
import Modal from 'react-modal';
import Chart from "chart.js";
import moment from "moment";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import './HourlyDataModal.css';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

export const HourlyDataModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName='overlay'
            className='hourlyDataModal-modal'
        >
            <button className='modal-close' onClick={props.onRequestClose}/>
            <LineGraph data={props.data} offset={props.offset}/>
        </Modal>
    );
};


class LineGraph extends React.Component {
    chartRef = React.createRef();

    constructor (props) {
        super(props);
        this.data = [];
        this.labels = [];
    }

    componentDidMount () {
        this.handleData();
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.labels,
                datasets: [
                    {
                        label: "Temperature",
                        data: this.data,
                        backgroundColor: 'rgba(0,150,136,0.5)'
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
            }
        });
    }

    handleData = () => {
        // Just the first ten elements will be rendered
        const tenFirstElements = this.props.data.slice(0, 12);
        const locationHourOffset = this.handleOffset(new Date(tenFirstElements[0].time * 1000));
        const localInitialHour = new Date(tenFirstElements[0].time * 1000).getHours()
        tenFirstElements.forEach((hour, index) => {
            const locationHour = localInitialHour + index + locationHourOffset
            this.data.push(hour.temperature);
            const labelHour = locationHour >= 24 ? locationHour - 24 : locationHour
            this.labels.push(labelHour + ':00');
        });
    };

    handleOffset = () => {
        const currentOffset = moment().utcOffset()/60;
        const searchLocationOffset = this.props.offset;
        return searchLocationOffset - currentOffset;
    }

    render () {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

HourlyDataModal.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    offset: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired
}

const MapStateToProps = ({weatherReducer, statusReducer}) => {
    return {
        data: weatherReducer.hourlyData,
        offset: weatherReducer.offset,
        isOpen: statusReducer.showHourly
    }
};
export default connect(MapStateToProps)(HourlyDataModal);