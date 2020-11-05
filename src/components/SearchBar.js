import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(term);
	};
	return (
		<form className="ui category search" onSubmit={onFormSubmit}>
			<div className="ui icon input fluid">
				<input
					className="prompt"
					type="text"
					placeholder="Search videos..."
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<i className="search icon"></i>
			</div>
			<div className="results"></div>
		</form>
	);
};

export default SearchBar;
