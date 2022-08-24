import React from 'react';

const SearchStatus = ({ length }) => {
	let stringUsers = '';
	switch(true) {
		case length > 4 && length <= 14:
			stringUsers = 'человек тусанет';
			break;
		case length > 1 && length < 5:
			stringUsers = 'человека тусанут';
			break;
		case length === 1:
			stringUsers = 'человек тусанет';
			break;
	}

	return (
		<h2 className={'badge ' + (length > 0 ? 'bg-primary' : 'bg-danger')}>
			{length > 0
				? length + ' ' + stringUsers + ' с тобой сегодня'
				: 'Никто с тобой не тусанет'}
		</h2>
	);
};

export default SearchStatus;