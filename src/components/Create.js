import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Create = () => {
    const [info,setInfo] = useState({
        name: "",
        email:"",
        website: "",
        username: ""
     })
   const navigate = useNavigate();
     const handleSubmit= (e)=>{
         e.preventDefault()
         axios.post('https://jsonplaceholder.typicode.com/users', info)
         .then(res => {
           console.log(res);
           navigate("/")
         }
           )
          .catch(err =>console.log(err))
     }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'> 
       <div  className='w-50 border bg-white  shadow px-5 pt-3 pb-5 rounded'>
           <h1>Add a User</h1>
           <form onSubmit={handleSubmit}>
            <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' className='form-control' name='name' placeholder='Enter Name...' onChange={(e)=> setInfo({...info, name:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='username'>Username:</label>
            <input type='text' className='form-control' name='username' placeholder='Enter Username...'  onChange={(e)=> setInfo({...info, username:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' className='form-control' name='email' placeholder='Enter Email...' onChange={(e)=> setInfo({...info, email:e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input type='text' className='form-control' name='website' placeholder='Enter Website...'  onChange={(e)=> setInfo({...info, website:e.target.value})}/>
            </div>
            <button  className='btn btn-success mt-4'>Submit</button>
             <Link to="/"><button  className='btn btn-primary ms-3 mt-4' >Back</button></Link> 
           </form>
       </div>
    </div>
  )
}

export default Create