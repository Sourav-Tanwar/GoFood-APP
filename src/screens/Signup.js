import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const BE_API_BASE_URL = process.env.REACT_APP_BE_API_BASE_URL;

export default function Signup() {
    const [credentials, setcredentials] =useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password,location:credentials.geolocation}))
        const response = await fetch(`${BE_API_BASE_URL}/api/createuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email,password:credentials.password,location:credentials.geolocation})
            
        });
        const json = await  response.json()
        console.log(json);
        if(!json.success){
            alert("Invalid Value Credentials")
            // alert(json.success)
        }

    }
const onChange =(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}
    

  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="test" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleLocation" className="form-label">Address</label>
                <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange} id="exampleLocation"/>
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
        </form>
    </div>
    </>
  )
}
