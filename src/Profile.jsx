import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Profile() {
     const navigate = useNavigate();
  return (
    <div>
      <h1>Profile Page</h1>
      <Button onClick={() => navigate(-1)}>Back</Button> 
    </div>
  )
}
