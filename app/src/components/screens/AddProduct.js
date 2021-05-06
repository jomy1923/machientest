import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
import Select from 'react-select'

const AddProduct = () => {
    var selectionList =[
        {
            value:1,
            label:'Phone'
        },
        {
            value:2,
            label:'Smart Watches'
        },
        {
            value:2,
            label:'Air Pods'
        }
    ]
    
    const history = useHistory()
    const [ProductName,setName] = useState('')
    const [Price,setPrice] = useState('')
    const [Quantity,setQuantity] = useState('')
    const [Category,setCategory] = useState(selectionList.label)
    const cat= e =>{
        setCategory(e.label)
    }
    const postDetails = ()=>(
        
        
        fetch('/AddProduct',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'sunday '+localStorage.getItem('jwt')

            },
            body:JSON.stringify({
                ProductName,
                Price,
                Quantity,
                Category
            })    
        }).then(res=>res.json())
        .then(data=>{
         console.log('data',data);
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"})
            }else{
                M.toast({html:'product added successfully',classes:"#ffa000 amber darken-2"})
                
                history.push('/Dashboard')
            }
        }).catch(err=>{
            console.log('ertyu',err)
        })
        )
    return (
        <div className='myCardP' >
           
            <div className="card auth-card">
            <div>
                <h2>Add Product</h2>
            </div>
                    <div>
                        <div>
                            <input type='text' placeholder='Product Name' 
                            value={ProductName} onChange={(e)=>setName(e.target.value)}/>
                            <label htmlFor='ProductName'></label>
                        </div>
                        <div>
                            <input type='text' placeholder='Price' 
                            value={Price} onChange={(e)=>setPrice(e.target.value)}/>
                            <label htmlFor='Price'></label>
                        </div>
                        <div>
                            <input type='text' placeholder='Quantity'
                            value={Quantity} onChange={(e)=>setQuantity(e.target.value)} />
                            <label htmlFor='Quantity'></label>
                        </div>
                        <div>
                            <div style={{paddingLeft:'250px'}}>
                               <Select options={selectionList} defaultValue onChange={cat}/>
                            </div>
                        </div>
                        <div style={{paddingRight:'40px'}}>
                        <button className="btn waves-effect waves-light #2196f3 blue" onClick={()=>postDetails()}>Add Product
                </button>
                        </div>
                        
                    </div>


            </div>
        </div>
    )

}

export default AddProduct