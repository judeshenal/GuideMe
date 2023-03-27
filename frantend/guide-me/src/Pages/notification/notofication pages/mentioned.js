import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

export default function Done() {
  return (
    <div >
      <Button variant="link" className='rounded-circle'><Link to="/notification"><FaArrowCircleLeft color='#000000' /></Link></Button>
    </div>
  )
}
