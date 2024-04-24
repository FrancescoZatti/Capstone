import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'



export default function Prova() {

    const [ortaggi, setOrtaggi] = useState([])

    const fetchOrtaggis = () => {
        axios
          .get('http://127.0.0.1:8000/api/ortaggi')
          .then((response => setOrtaggi(response.data.data)))
          .catch(error => console.log(error));
      }
      useEffect(() => {
        fetchOrtaggis();
      }, [])

  return (
    <div>
        <h1>Prova</h1>
        {ortaggi.length > 0 ? (
        <>
        <p>{ortaggi[0].name}</p>
        <p>{ortaggi[0].description}</p>
        <p>{ortaggi[0].id}</p>
        </>)
        : (<p>Loading...</p>)
        }
        
    </div>
  )
}
