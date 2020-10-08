import React, {useState} from 'react';
import {InfoModal} from "../index";

const CustomButtonInfoModal = () => {
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
                Open info modal
            </button>
            <InfoModal
                title={'Custom title'}
                extraInfo={'Custom extra info'}
                isOpen={isOpen}
                onRequestClose={() => setOpen(false)}
            />
        </>
    );
}

export default {
    title: 'Components/InfoModal',
    component: InfoModal
}

export const Default = () => <CustomButtonInfoModal />