import { Link } from 'react-router-dom'
const Dashboard = () => {
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
              <form>
                <div style={{ width: '150px' }}>
                  <div className="input-field">
                    <input id="email" type="email" placeholder='search' className="validate" />
                    <label for="email" ></label>
                  </div>
                </div>
              </form>
            </div>
            <div className="input-field col s12" style={{ marginLeft: '30px' }}>
              <select className="browser-default">
                <option value="" disabled selected >Category</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div style={{ paddingTop: '20px', marginLeft: '10px' }}>
              <Link to='/AddProduct'>
                <button className="btn waves-effect waves-light #f48fb1 pink lighten-3">Search
                </button></Link>
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

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
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
            </table>
          </div>
        </div>
      </div>
      <h5 style={{marginLeft:'235px'}}>Latest Products</h5>
      <div style={{ maxWidth: '300', paddingLeft: '240px', display: 'flex' }}>
        <div style={{ maxWidth: '200px' }}>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h6>product name</h6>
                <h6>$price</h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h6>product name</h6>
                <h6>$price</h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h6>product name</h6>
                <h6>$price</h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h6>product name</h6>
                <h6>$price</h6>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '200px' }}>
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h6>product name</h6>
                <h6>$price</h6>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>


  )

}

export default Dashboard