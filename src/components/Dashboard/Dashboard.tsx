import React, { useEffect } from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { Contact, File, Globe, Menu, Package, ShoppingCart } from 'lucide-react'
import { ToastContainer } from 'react-toastify'



const Dashboard = ({children}:React.PropsWithChildren) => {
    const nav  = useNavigation()
    const router = useNavigate()
    useEffect(() => {
        console.log(nav.location)
      onAuthStateChanged(auth,(user) => {
          if(!user){
            router('/login')
          }
      })
    }, [])
    
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content p-3 relative">
    <div className="mt-10 md:mt-0">
    {children}
    <ToastContainer/>
    </div>
    <label htmlFor="my-drawer-2" className="btn btn-sm absolute top-2 left-2 btn-primary drawer-button lg:hidden"><Menu size={16}/></label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 min-h-full text-base-content [&>*]:my-1 bg-gray-200">
      
      <li>
        <Link to="/" className={''}><Package size={16}/> Products</Link>
      </li>
      <li>
        <Link to="/orders" className={''}><ShoppingCart size={16}/> Orders</Link>
      </li>
      <li>
        <Link to="/categories"><Menu size={16}/> Categories</Link>
      </li>
      
      <li>
        <Link to="/config"><Globe size={16}/> Site Data</Link>
      </li>
      
      <li>
        <Link to="/contact"><Contact size={16}/> Contact</Link>
      </li>
    </ul>
  
  </div>
</div>
       
  )
}

export default Dashboard