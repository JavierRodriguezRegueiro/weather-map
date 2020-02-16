import React from 'react';
import Modal from 'react-modal';
import './infoModal.css';

Modal.setAppElement('#root');
const InfoModal = (props) => {
    return(
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName='overlay'
            className='modal'
        >
            <button className='modal-close' onClick={props.onRequestClose}/>
            {props.title && <h3>{props.title}</h3>}
            {props.extraInfo && <p>{props.extraInfo}</p>}
        </Modal>
    );
};

export {InfoModal}