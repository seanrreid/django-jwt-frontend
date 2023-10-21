import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export async function loader() {
    const url = 'http://localhost:8000/home/';
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };
    const data = await fetch(url, { headers }).then((response) =>
        response.json()
    );

    return { data };
}

export default function Home() {
    const navigate = useNavigate();
    const { data } = useLoaderData();
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            return navigate(`/login`, { replace: true });
        } else {
            setMessage(data.message);
        }
    }, [data, navigate]);

    return <h3>Hi {message}</h3>;
}
