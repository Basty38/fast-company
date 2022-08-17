import React, { useState } from 'react';
import api from "../api/index.js"

const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll());


	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter(user => user._id !== userId))
	};


	const renderPhrase = (number) => {
		let stringUsers = '';
		switch(true) {
			case number > 4 && number <= 14:
				stringUsers = 'человек тусанут';
				break;
			case number > 1 && number < 5:
				stringUsers = 'человека тусанут';
				break;
			case number === 1:
				stringUsers = 'человек тусанет';
				break;
		}
		return stringUsers;
	};


	const BustingQualities = (array) => {
		return array.map((qualities) => {
			return <span className={'badge m-1 text-bg-' + qualities.color} key={qualities._id}>{qualities.name}</span>
		})
	}


	let QuantityUsers = (array) => {
		return array.map((user) => (
			<tr key = {user._id}>
				<td>{user.name}</td>
				<td>{BustingQualities(user.qualities)}</td>
				<td>{user.profession.name}</td>
				<td>{user.completedMeetings}</td>
				<td>{user.rate + '/5'}</td>
				<td><button className='btn text-bg-danger' onClick={()=>handleDelete(user._id)}>delete</button></td>
			</tr>
		))
	};



	return (
		<>
			<h2 className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}>
				{users.length > 0 
					? users.length + ' ' + renderPhrase(users.length) + ' с тобой сегодня'
					: 'Никто с тобой не тусанет'}
			</h2>
			{users.length > 0 &&
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
			}
		</>
	);
};

export default Users;