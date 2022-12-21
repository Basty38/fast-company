import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    return (
        <>
            {
                <tr>
                    <td>{name}</td>
                    <td>
                        {qualities.map((qualitie) => {
                            return (
                                <Qualitie {...qualitie} key={qualitie._id} />
                            );
                        })}
                    </td>
                    <td>{profession.name}</td>
                    <td>{completedMeetings}</td>
                    <td>{rate + "/5"}</td>
                    <td>
                        <BookMark
                            status={bookmark}
                            onClick={() => onToggleBookMark(_id)}
                        />
                    </td>
                    <td>
                        <button
                            className="btn text-bg-danger"
                            onClick={() => onDelete(_id)}
                        >
                            delete
                        </button>
                    </td>
                </tr>
            }
        </>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
