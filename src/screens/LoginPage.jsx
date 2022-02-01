import React, {useState} from 'react';
import Navbar from '../components/Navbar';

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = (event) => {
		event.preventDefault();
		console.log(username);
		console.log(password);
		setUsername("");
		setPassword("");
	}
	return (
	<div>
		<Navbar/>
		<form className="customerLogin" onSubmit={(e) => loginHandler(e)}>
			<label>Username:</label>
			<input type="text" value={username} onChange={(el) => {setUsername(el.target.value);}}></input>
			<label>Password:</label>
			<input type="password" value={password} onChange={(el) => setPassword(el.target.value)}></input>
			<input className='submit' type="submit"></input>
		</form>
	</div>
	)
}
