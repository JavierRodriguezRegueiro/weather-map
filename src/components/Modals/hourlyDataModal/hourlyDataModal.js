import React from 'react';
import Modal from 'react-modal';
import Chart from "chart.js";
import {connect} from "react-redux";
import './hourlyDataModal.css';

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
                <LineGraph data={props.data}/>
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
    componentDidMount() {
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
        const tenFirstElements = this.props.data.slice(0,12);
        this.data = [];
        this.labels = [];
        tenFirstElements.forEach((hour) => {
            const date = new Date(hour.time * 1000);
            this.data.push(hour.temperature);
            this.labels.push(date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes());
        });
    }

    render() {
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


const MapStateToProps = ({weatherReducer, statusReducer}) => {
    return {
        data: weatherReducer.hourlyData,
        isOpen: statusReducer.showHourly
    }
};
export default connect(MapStateToProps)(HourlyDataModal);