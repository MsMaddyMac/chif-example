import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='left'>
				<h1>CHIF React Tutorial</h1>
			</div>
			<div className='right'>
				<Link to='/'>Class</Link>
				<Link to='/func'>Functional</Link>
			</div>
		</nav>
	);
};

export default Nav;
