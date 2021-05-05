import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Login = () => {
    const history= useHistory()
    const [username,setName] = useState("")
    const [password,setPassword] = useState("")
    const PostData = ()=>{
        
        fetch('/signIn',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
               
            },
            body:JSON.stringify({
                username,
                password
            })    
        }).then(res=>res.json()).then(data=>{
            console.log('data',data);
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"})
            }else{
                localStorage.setItem('jwt',data.token)
                localStorage.setItem('user',JSON.stringify(data.user))
                M.toast({html:' you are signed successfully',classes:"#ffa000 amber darken-2"})
                history.push('/Dashboard')
            }
        })
    }
    return (
        <div className='myCard' >
            <div className="card auth-card">
                <h2>Login</h2>
                <input type='text' placeholder='username' value = {username} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='password' value= {password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #2196f3 blue" onClick={()=>PostData()}>Login
  
                </button>
                <h5>
                    <Link to='/'>Don't you have an account</Link>
                </h5>
            </div>
        </div>
    )

}

export default Login