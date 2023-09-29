import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
         const [info,setInfo] = useState({
            id: id,
            name: "",
            email:"",
            website: "",
            username: ""
     })
    
   const navigate = useNavigate();
   useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => {
           setInfo(res.data);
           console.log(res.data)
         })
          .catch(err =>console.log(err))
   }, [])
     const handleSubmit= (e)=>{
         e.preventDefault()
         axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, info)
         .then(res => {
           console.log(res);
           navigate("/")
         }
           )
          .catch(err =>console.log(err))
     }
     console.log(info.id)
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'> 
       <div  className='w-50 border bg-white  shadow px-5 pt-3 pb-5 rounded'>
           <h1>Update User</h1>
           <form onSubmit={handleSubmit}>
            <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' className='form-control' name='name' placeholder='Enter Name...' value={info.name} onChange={(e)=> setInfo({...info, name:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='username'>Username:</label>
            <input type='text' className='form-control' name='username' placeholder='Enter Username...' value={info.username} onChange={(e)=> setInfo({...info, username:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' className='form-control' name='email' value={info.email} placeholder='Enter Email...' onChange={(e)=> setInfo({...info, email:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input type='text' className='form-control' name='website' value={info.website} placeholder='Enter Website...'  onChange={(e)=> setInfo({...info, website:e.target.value})}/>
            </div>
            <button  className='btn btn-success mt-4'>Update</button>
             <Link to="/"><button  className='btn btn-primary ms-3 mt-4' >Back</button></Link> 
           </form>
       </div>
    </div>
  )
}

export default Update