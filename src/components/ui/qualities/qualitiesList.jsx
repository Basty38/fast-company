import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie.jsx";
import { useQualities } from "../../../hooks/useQualities.jsx";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities();
    if (isLoading) return "Loading...";
    return (
        <>
            {qualities.map((qualitie) => {
                return <Qualitie key={qualitie} id={qualitie} />;
            })}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
