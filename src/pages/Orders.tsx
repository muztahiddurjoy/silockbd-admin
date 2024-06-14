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
      <div className="flex items-center justify-between">
          <div className="">
            <label className='text-sm font-semibold'>Sort By</label>
            <select className="select select-bordered w-full max-w-xs border-primary select-sm">
                <option disabled selected>Sort By</option>
                <option>Date</option>
                <option>Name</option>
                <option>Price High to Low</option>
                <option>Price Low to High</option>
              </select>
          </div>
          <label className="input input-bordered input-sm border-primary flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
  <table className="table table-zebra mt-5">
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