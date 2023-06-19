import React, { useEffect, useState } from 'react'
import './forgotpass.css'
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { publicRequest } from '../../Request';

const ForgotPass = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            setLoading(true);
			const { data } = await publicRequest.post('/reset-password/', { email });
			setMsg(data.message);
            setLoading(false);
			setError("");
		} catch (error) {
            if ( error.response && error.response.status >= 400 && error.response.status <= 500 ) {
                    setError(error.response.data.message);
                    setLoading(false);
				    setMsg("");
			    }
		    }
	   };
       console.log(loading);

	return (
		<div className='container'>
			<form className='form_container' onSubmit={handleSubmit}>
				<h3>Enter email to reset password</h3>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					required
					className='input'
				/>
				{error && <div className='error_msg'>{error}</div>}
				{msg && <div className='success_msg'>{msg}</div>}
				{ loading? <Loader/>: <button type="submit" className='green_btn'>
					Submit
				</button>
}
			</form>
		</div>
	);
}

export default ForgotPass
