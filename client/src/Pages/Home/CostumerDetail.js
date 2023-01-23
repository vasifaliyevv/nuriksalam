import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import {  useParams } from 'react-router-dom';

function Detail() {
    const [costumer, setCostumer] = useState([])
    const { id } = useParams()
    function Delete() {
        axios.delete(`http://localhost:8080/api/customers/${id}`)
            .then(() => console.log({ status: 'Delete successful' }));
            toast.success('Successfully deleted!')
    }
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/customers/${id}`)
            .then((res) => {
                setCostumer(res.data);

            }, 3000);
    }, []);
    return (
      
        <div className='cardinfo'>
            <div className='cardinfotext'>
                <p>Name: {costumer.name}</p>
                <p>Surname: {costumer.surname}</p>
                <p>Desc: {costumer.desc}</p>
            </div>
                <button onClick={Delete}>Delete</button>
            <Toaster/>
        </div>
 
    );
}

export default Detail