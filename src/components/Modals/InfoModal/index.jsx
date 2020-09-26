import React from 'react';
import Modal from 'react-modal';
import './InfoModal.css';
import PropTypes from "prop-types";

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
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

InfoModal.propTypes = {
    title: PropTypes.string.isRequired,
    extraInfo: PropTypes.string
};

InfoModal.defaultProps = {
    extraInfo: ''
}

export {InfoModal}