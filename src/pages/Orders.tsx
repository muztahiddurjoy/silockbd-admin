import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import OrderAdapter from '../components/Orders/OrderTable/OrderAdapter'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Orders = () => {
  const [orders, setorders] = useState<Order[]>([])
  const [tempOrder, settempOrder] = useState<Order[]>([])
  const [searchQuery, setsearchQuery] = useState('')

  const getOrders = async ()=>{
    setorders([])
    const orderRes = await getDocs(collection(db,'orders'))
    orderRes.docs.forEach((v)=>{
      if(v.exists()){
        setorders(p=>[...p,v?.data() as any])
      }
    })
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    if(searchQuery.toLowerCase().trim()){
      settempOrder(orders.filter((v)=>String(v.customer.address).toLowerCase().trim().includes(searchQuery.toLowerCase().trim())||String(v.customer.name).toLowerCase().trim().includes(searchQuery.toLowerCase().trim())||String(v.customer.businessName).toLowerCase().trim().includes(searchQuery.toLowerCase().trim())||String(v.customer.email).toLowerCase().trim().includes(searchQuery.toLowerCase().trim())||String(v.customer.phone).toLowerCase().trim().includes(searchQuery.toLowerCase().trim())))
    }
    else{
      settempOrder(orders)
    }
  }, [searchQuery])
  
  useEffect(() => {
    settempOrder(orders)
  }, [orders])
  
  
  return (
    <Dashboard>
      <div className="flex itesm-center justify-between">
      <Header>Orders</Header>
      {/* <button className="btn btn-primary btn-sm"><Plus size={16}/>New</button> */}
      </div>

      <div className="overflow-x-auto mt-10">
      <div className="flex items-center justify-between">
          {/* <div className="">
            <label className='text-sm font-semibold'>Sort By</label>
            <select className="select select-bordered w-full max-w-xs border-primary select-sm">
                <option disabled selected>Sort By</option>
                <option>Date</option>
                <option>Name</option>
                <option>Price High to Low</option>
                <option>Price Low to High</option>
              </select>
          </div> */}
          <label className="input input-bordered input-sm border-primary flex items-center gap-2">
            <input type="text" value={searchQuery} onChange={e=> setsearchQuery(e.target.value)} className="grow" placeholder="Customer Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
  <table className="table table-zebra mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Product Code</th>
        <th>Quantity</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Business Name</th>
        <th>Address</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
    {tempOrder.map((u,i)=>u.products.map((v,j)=><OrderAdapter key={`${i}-${j}`} productName={v.name} productCode={v.code} productImage={v.image} customerName={u.customer.name} address={u.customer.address} businessName={u.customer.businessName} email={u.customer.email} phone={u.customer.phone} quantity={Number(v.quantity)}/>))}
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Product Code</th>
        <th>Quantity</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Business Name</th>
        <th>Address</th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </Dashboard>
  )
}

export default Orders