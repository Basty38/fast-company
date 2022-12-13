import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    let stringUsers = "человек тусанет";

    const arrayNumber = [2, 3, 4];
    arrayNumber.forEach((num) => {
        if (num === length) {
            stringUsers = "человека тусанут";
        }
    });

    return (
        <h2 className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
            {length > 0
                ? length + " " + stringUsers + " с тобой сегодня"
                : "Никто с тобой не тусанет"}
        </h2>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
