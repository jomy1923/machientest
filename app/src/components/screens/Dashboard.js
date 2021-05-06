import React, { useState, useEffect ,useRef} from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import Select from 'react-select'

const Dashboard = () => {
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
  const [search,setSearch] = useState('')
  const searchModel = useRef(null)
  const [Data, setData] = useState([])
  const [Products, setProducts] = useState([])
  const [productDetails,setProductDetails]=useState([])
  const [category,setCategory] = useState(selectionList.label)
    const cat= e =>{
        setCategory(e.label)
    }
    
  
  useEffect(()=>{
    M.Modal.init(searchModel.current)
  },[])


  useEffect(() => {
    fetch('/Dashboard', {
      headers: {
        Authorization: 'sunday ' + localStorage.getItem('jwt')
      }
    }).then(res => res.json())
      .then((result) => {

        setData(result.Products)
      })
  }, [])
  useEffect(() => {
    fetch('/limited', {
      headers: {
        Authorization: 'sunday ' + localStorage.getItem('jwt')
      }
    }).then(res => res.json())
      .then((Products) => {
        console.log('Products', Products);
        setProducts(Products.Products)
      })
  }, [])

  const fetchProducts=(query)=>{
    setSearch(query)
    fetch('/Search',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        query
      })
    }).then(res=>res.json())
    .then(results=>{
      
      setProductDetails(results.product)
    })
  }


  return (
    <div>
      <div className='myCardD' >
        <div className="card auth-cardD">
          <h2>Dashboard</h2>
          <div style={{ display: 'flex', marginLeft: '70%' }}>
            <Link to='/AddProduct'>
              <button className="btn waves-effect waves-light #2196f3 blue">AddProduct
                </button></Link>
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <div style={{ marginLeft: '150px' }} >
             
                
             
            </div>
            <div className="input-field col s12" style={{ paddingLeft:'30px', paddingBottom:'30px', width:'200px'}}>
            <Select options={selectionList} defaultValue onChange={cat}/>
            </div>
            <div style={{ paddingTop: '20px', marginLeft: '10px' }}>
             
                <button className="btn waves-effect waves-light #f48fb1 pink lighten-3 modal-trigger" 
                data-target="modal1" >Search
                </button>
            </div>
          </div>
          <div style={{ width: '600px', margin: '26px auto' }}>

            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {
                Data.map((item) => {
                  return (
                    <tbody key={item._id}>
                      <tr>
                        <td>{item.ProductName}</td>
                        <td>{item.Price}</td>
                        <td> <div style={{ display: 'flex' }}>
                          <div style={{ paddingRight: '20px' }}>
                            <Link to='/Edit'>
                              <button className="waves-effect waves-light btn-small #f48fb1 pink lighten-3">Edit
                    </button></Link>
                          </div>
                          <Link to='/Delete'>
                            <button className=" waves-effect waves-light btn-small #f48fb1 pink lighten-3">Delete
                    </button></Link>
                        </div>

                        </td>

                      </tr>

                    </tbody>
                  )
                })
              }

            </table>
          </div>
        </div>
      </div>
      <h5 style={{ marginLeft: '185px' }}>Latest Products</h5>
      <div style={{ paddingLeft: '190px', display: 'flex' }}>


        {
          Products.map((items) => {
            return (
              <div style={{ paddingLeft: '90px', display: 'flex' }}>
                <div className='cardL' key={items._id}>
                  <div className="card horizontal">
                    <div className="card-stacked">
                      <div className="card-content">
                        <h6>{items.ProductName}</h6>
                        <h6>RS-{items.Price}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            )
          })
        }


      </div>
      <div>


        <div id="modal1" className="modal" ref={searchModel}>
          <div className="modal-content">
                  <div>
                   <input type='text' placeholder='search' 
                   value={search} onChange={(e)=>fetchProducts(e.target.value)} />
              <label htmlFor='search'></label>
                        </div>
          <ul className="collection">
           {productDetails.map(item=>{
             return <li className='collection-item'>{item.ProductName}</li>
           })}

    </ul>
          </div>
          <div className="modal-footer">
            <button  className="modal-close waves-effect waves-green btn-flat" onclick={()=>setSearch('')}>close</button>
          </div>
        </div>

      </div>

    </div>


  )

}

export default Dashboard