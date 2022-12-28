import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie.jsx";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualitie) => {
                return <Qualitie {...qualitie} key={qualitie._id} />;
            })}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
