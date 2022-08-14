import React, { useState } from 'react';
import api from "../api/index.js"

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());
	const handleDelete = (userId) => {

	};
	const renderPhrase = (number) => {

	};



	const QuantityUsers = (array) => {
		return array.map((user) => (
			<tr>
				<td key={user._id}>{user.name}</td>
				<td>{}</td>
				<td>{user.profession.name}</td>
				<td>{user.completedMeetings}</td>
				<td>{user.rate + '/5'}</td>
				<td><button className='btn text-bg-danger'>delete</button></td>
			</tr>
		))
	};



	return (
		<>
			<table className="table">
			  <thead>
			    <tr>
			      <th scope="col">Имя</th>
			      <th scope="col">Качества</th>
			      <th scope="col">Профессия</th>
			      <th scope="col">Встретился, раз</th>
			      <th scope="col">Оценка</th>
			      <th scope="col"></th>
			    </tr>
			  </thead>
			  <tbody>
			  	{QuantityUsers(users)}
			  </tbody>
			</table>
		</>
	);
};

export default Users;