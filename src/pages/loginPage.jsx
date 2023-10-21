import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
        };
        const url = 'http://localhost:8000/token/';
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((response) => response.json());

        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        return navigate(`/`, { replace: true });
    };
    return (
        <form className='Auth-form' onSubmit={submit}>
            <h3 className='Auth-form-title'>Sign In</h3>
            <div className='form-group mt-3'>
                <label>Username</label>
                <input
                    placeholder='Enter Username'
                    autoComplete='email'
                    name='username'
                    type='text'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='form-group mt-3'>
                <label>Password</label>
                <input
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    autoComplete='current-password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type='submit' className='btn'>
                Submit
            </button>
        </form>
    );
}
