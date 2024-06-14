import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import OrderAdapter from '../components/Orders/OrderTable/OrderAdapter'

const Orders = () => {
  return (
    <Dashboard>
      <div className="flex itesm-center justify-between">
      <Header>Orders</Header>
      {/* <button className="btn btn-primary btn-sm"><Plus size={16}/>New</button> */}
      </div>

      <div className="overflow-x-auto mt-10">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Product</th>
        <th>Order ID</th>
        <th>Shipping Status</th>
        <th>Payment Status</th>
        <th>Ordered On</th>
        <th>Delivered On</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {Array(10).fill("_").map((v,i)=> <OrderAdapter key={i}/>)}
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Order ID</th>
        <th>Shipping Status</th>
        <th>Payment Status</th>
        <th>Ordered On</th>
        <th>Delivered On</th>
        <th>Actions</th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </Dashboard>
  )
}

export default Orders