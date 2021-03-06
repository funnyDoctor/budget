import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={props.className}><i className={props.icon}/>{props.children}
        </button>
    );
};


Button.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.object,
    className: PropTypes.string
};


export default Button;