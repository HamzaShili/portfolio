import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SkillDetails(props) {
    const [technologies, setTechnologies] = useState([])
    const [tech, setTech] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        axios.get('https://devmastery-assets.vercel.app/technologies.json')
            .then((result) => setTechnologies(result.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        const found = technologies.find(t => t.id === id)
        setTech(found)
    }, [technologies, id])


    return (
        <>
            {tech && (<div className='container mt-5' style={{ textAlign: 'center' }}>
                <h1>{tech.name}</h1>
                <img style={{ width: 150 }} src={tech.image} alt={tech.name} />
                <p>{tech.description}</p>
            </div>)}
        </>
    )
}
