import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api/index.js";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";

const User = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    });
    const handleAllUsers = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <h4>completedMeetings: {user.completedMeetings}</h4>
                <h2>Rate: {user.rate}</h2>
                <button
                    onClick={() => {
                        handleAllUsers();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        );
    }
    return <h1>loading user</h1>;
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};

export default User;
