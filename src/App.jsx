import React, { useState } from 'react';
import Users  from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api/index.js';

const App = () => {
	const [users, setUsers] = useState(api.users.fetchAll());


	const handleDelete = (userId) => {
		setUsers((prevState) => prevState.filter(user => user._id !== userId))
	};


/*
	const handleToggleBookMark = (id) => {

	};
	*/

	console.log('users2', users);

	return (
		<>
			<SearchStatus length={users.length}/>
			<Users users={users} onDelete={handleDelete}/>
		</>
	);
};

export default App;