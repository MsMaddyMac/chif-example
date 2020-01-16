import React from 'react';
import { Route } from 'react-router-dom';
import ClassEx from './components/ClassEx';
import FuncEx from './components/FuncEx';
import Nav from './Nav';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<>
				<Route exact path='/' component={ClassEx} />
				<Route path='/func' component={FuncEx} />
			</>
		</div>
	);
}

export default App;
