import React from 'react';

const BookMark = ({ status, ...rest }) => {

	console.log('STATUS', status);
	console.log('PROPS', rest);
	let classes = 'bi bi-bookmark';
	classes = status === false ? classes : classes+='-heart-fill';
	return(
		<>
			<button {...rest}>
				<i className={classes}></i>
			</button>
		</>
	)
};

export default BookMark;