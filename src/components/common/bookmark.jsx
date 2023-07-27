import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    let classes = "bi bi-bookmark";
    classes = status === false ? classes : (classes += "-heart-fill");

    return (
        <>
            <button {...rest}>
                <i className={classes}></i>
            </button>
        </>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
