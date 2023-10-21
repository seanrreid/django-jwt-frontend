import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return (
        <>
            <h1>Django JWT</h1>
            <nav>
                <ul>
                    <li className='me-auto'>
                        {isAuth ? <a href='/'>Home</a> : null}
                    </li>
                    <li>
                        {isAuth ? (
                            <Link to='/logout'>Logout</Link>
                        ) : (
                            <Link to='/login'>Login</Link>
                        )}
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    );
}
