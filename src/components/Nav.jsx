import { useState, useEffect } from 'react';

export function Navigation() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return (
        <ul>
            <li className='me-auto'>{isAuth ? <a href='/'>Home</a> : null}</li>
            <li>
                {isAuth ? (
                    <a href='/logout'>Logout</a>
                ) : (
                    <a href='/login'>Login</a>
                )}
            </li>
        </ul>
    );
}
