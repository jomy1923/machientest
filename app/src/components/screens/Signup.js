import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup = () => {
    const history= useHistory()
    const [username,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        
        fetch('/signup',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username,
                password,
                email,
            })    
        }).then(res=>res.json()).then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"})
            }else{
                M.toast({html:data.message,classes:"#ffa000 amber darken-2"})
                history.push('/signIn')
            }
        })
    }
    return (
        <div className='myCard' >
            <div className="card auth-card">
                <h2>Register</h2>
                <input type='text' placeholder='username' value = {username} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='email' value = {email} onChange={(e)=>setEmail(e.target.value)} />
                <input type='password' placeholder='password' value= {password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #2196f3 blue" onClick={()=>{PostData()}}>SignUp
  
                </button>
                <h5><Link to='/signIn'>already have an account?</Link></h5>
            </div>
        </div>
    )

}

export default Signup