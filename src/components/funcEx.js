import React, { useEffect } from 'react';

import chif from '../chifs/blackpug.chif';

const FuncEx = props => {
	useEffect(() => {
		window.chifPlayer.streamFiles();
	}, []);
	return (
		<div class='page'>
			<chear src={chif}></chear>
		</div>
	);
};

export default FuncEx;
