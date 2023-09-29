import React from 'react'
import {useEffect,useState} from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const {id} = useParams()
    const [first, setFirst] = useState([]);
  
  useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    setFirst(res.data);
    console.log(res.data)
  }
    )
   .catch(err =>console.log(err))
  }, [])
  const handleDel = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      console.log(res);
    }
      )
     .catch(err =>console.log(err))
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-1000 mt-4'>
            <h1 className='m-5'>
                LIST OF USERS
            </h1>
         <div className='w-100 rounded bg-white border shadow p-4'>
             <Link to="/create" className='btn btn-success m-4'>ADD INFO</Link>
             <table class="table table-striped-columns">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Username</th>
                            <th scope="col">Website</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {first.map((e, i)=>
                            <tr key={i}>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.username}</td>
                                <td>{e.website}</td>
                                <td>
                                   <Link to=
                                   {`/View/${e.id}`} className='btn btn-sm btn-primary me-2'>
                                      <FontAwesomeIcon icon={faEye} />
                                   </Link> 
                                   <Link to={`/Update/${e.id}`}className='btn btn-sm btn-primary me-2'>
                                     <FontAwesomeIcon icon={faPen}/>
                                   </Link> 
                                   <button className='btn btn-sm btn-danger' onClick={handleDel}>
                                   <FontAwesomeIcon icon={faTrash} />
                                   </button> 
                                </td>
                            </tr>
                        )}
                    </tbody>
             </table>
          </div>
    </div>
   
  )
  
}

export default Home