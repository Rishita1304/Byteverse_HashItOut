import React, { useEffect, useState } from 'react'
import './resetpass.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const ResetPassword = () => {
    const [validUrl, setValidUrl] = useState(true);
	const [password, setPassword] = useState("");
    const [hideshowPassword, setHideShowPassword] = useState(false)
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
	const param = useParams();
	const url = `http://localhost:4000/api/reset-password/${param.id}/${param.token}`;
    console.log(validUrl);
	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            setLoading(true);
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
            setLoading(false);
			setError("");
			window.location = "/login";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<>
			{/* {validUrl ? ( */}
				<div className='container'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h2>Reset your Password</h2>
                        <div className='eyepass'>

                        <i className="fas fa-eye" onClick={() => setHideShowPassword(!hideshowPassword)}></i>
                            <input type={!hideshowPassword ? "password" : "text"}
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className='input'
                            />
                            </div>
						{error && <div className='error_msg'>{error}</div>}
						{msg && <div className='success_msg'>{msg}</div>}
						{loading? <Loader/>: <button type="submit" className='green_btn'>
							Submit
						</button>
}
					</form>
				</div>
			{/* ) : (
				<h1>404 Not Found</h1>
			)}  */}
		</>
	);
}

export default ResetPassword
