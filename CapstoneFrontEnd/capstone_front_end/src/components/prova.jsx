import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'



export default function Prova() {

    const [garden, setGarden] = useState([])

    const fetchGardens = () => {
        axios
          .get('http://127.0.0.1:8000/api/gardens')
          .then((response => setGarden(response.data.data)))
          .catch(error => console.log(error));
      }
      useEffect(() => {
        fetchGardens();
      }, [])

  return (
    <div>
        <h1>Prova</h1>
        {garden.length > 0 ? (
        <>
        <p>{garden[0].name}</p>
        <p>{garden[0].description}</p>
        <p>{garden[0].id}</p>
        </>)
        : (<p>Loading...</p>)
        }
        
    </div>
  )
}
