import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export async function loader() {
    const url = 'http://localhost:8000/logout/';
    const refresh_token = localStorage.getItem('refresh_token');
    const access_token = localStorage.getItem('access_token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({ refresh_token }),
    });
    return { response };
}

export default function Logout() {
    const navigate = useNavigate();
    const { response } = useLoaderData();

    if (response.status === 205) {
        localStorage.clear();
    } else {
        console.error('ERROR', response.status, response.statusText);
    }
    useEffect(() => {
        return navigate(`/`, { replace: true });
    }, [response, navigate]);
}
