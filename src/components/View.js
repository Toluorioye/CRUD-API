import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const {id} = useParams()
    const [info,setInfo] = useState({
        id: "",
        name: "",
        email:"",
        website: "",
        username: ""
     })
    ;
   const navigate = useNavigate();
   useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, info)
         .then(res => 
           setInfo(res.data))
          .catch(err =>console.log(err))
   }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'> 
       <div  className='d-flex flex-column justify-content-center align-items-center w-50 border bg-white  shadow px-5 pt-3 pb-5 rounded'>
           <h1 className='mb-5'> User Id {info.id} Detail</h1>
           <div>
              <h2 className='mb-3'>Name: {info.name}</h2>
              <h2 className='mb-3'>Email: {info.email}</h2>
              <h2 className='mb-3'>Username: {info.username}</h2>
              <h2 className='mb-3'>Website: {info.website}</h2>
           </div>
           <Link to="/"><button  className='btn btn-primary ms-3 mt-4' >Back</button></Link> 
       </div>
    </div>
  )
}

export default View