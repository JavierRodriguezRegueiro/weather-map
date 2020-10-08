import React, {useState} from 'react';
import {HourlyDataModalContainer} from '../index';
import data from '../__mock__/MockData.json';

const CustomButtonHourlyDataModal = () => {
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <button
                onClick={() => setOpen(true)}
                style={{border: 'none',
                    height: '30px',
                    backgroundColor: '#ffab91',
                    borderRadius: '5px',
                    boxShadow:'0 8px 6px -6px black',
                    outline: 'none'}}
            >
                Open hourly data modal
            </button>
            <HourlyDataModalContainer
                data={data}
                isOpen={isOpen}
                offset={2}
                onRequestClose={() => setOpen(false)}
            />
        </>
    );
}

export default {
    title: 'Components/HourlyDataModal',
    component: HourlyDataModalContainer
}

export const Default = () => <CustomButtonHourlyDataModal />