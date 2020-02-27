import React from "react";
import './scrimModal.css';
import PropTypes from "prop-types";

const ScrimModal = (props) => {
    return(
        <React.Fragment>
            {props.isOpen && <div className='scrimModal'/>}
        </React.Fragment>
    );
};

ScrimModal.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

export {ScrimModal}