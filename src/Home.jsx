
import Button from 'react-bootstrap/Button'; // Ensure correct import
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/About">Go to about page</Link><br />
            <Button onClick={() => navigate("/Profile")}>Click</Button> 
        </div>
    );
}

