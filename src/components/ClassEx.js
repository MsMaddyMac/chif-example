import React from 'react';

import chif from '../chifs/blackpug.chif';

export default class ClassEx extends React.Component {
	componentDidMount() {
		window.chifPlayer.streamFiles();
	}
	render() {
		return (
			<div class='page'>
				<h3>Class Example</h3>
				<chear src={chif}></chear>
			</div>
		);
	}
}
