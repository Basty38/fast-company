import React from 'react'
import api from "../api/index.js"

const Users = () => {
	console.log(api.users.fetchAll());
	return <h1>Users</h1>;
};

export default Users;