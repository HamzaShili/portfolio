import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Skills() {

  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((result) => setTechnologies(result.data))
      .catch(error => console.log(error))
  }, [])

  console.log(technologies)
  return (
    <div>
      <div className='row'>
        {technologies.map(t => {
          return (
            <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3'>
              <div className="card p-3" key={t.id}>
                <img src={t.image} class="card-img-top" alt={t.image} />
                <div className="card-body">
                  <h5 className="card-title">{t.name}</h5>
                  <Link to={`/skills/${t.id}`} className="btn btn-primary">Lean about</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
