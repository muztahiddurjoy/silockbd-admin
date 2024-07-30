import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import { Plus } from 'lucide-react'
import TableAdapter from '../components/Products/TableAdapter/TableAdapter'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Products = () => {
  const [products, setproducts] = useState<DocumentData[]>([])
  const [categories, setcategories] = useState<DocumentData[]>([])

  const getCategories = async  ()=>{
    const result = await getDocs(collection(db,'categories'))
    setcategories(result.docs)
  }

  const getProducts = async ()=>{
    const result = await getDocs(collection(db,'products'))
    setproducts(result.docs)
  }

  useEffect(() => {
    getCategories()
    getProducts()
  }, [])
  
  return (
    <Dashboard>
      <div className="flex items-center justify-between">
      <Header>Products</Header>
      <Link to="/add-product"><button className="btn btn-primary btn-sm"><Plus size={16}/>New</button></Link>
      </div>
      <div className="overflow-x-auto mt-10">
        <div className="flex items-center justify-between">
          <div className="">
            <label className='text-sm font-semibold'>Category Filter</label>
            <select className="select select-bordered w-full max-w-xs border-primary select-sm">
                <option disabled selected>Category</option>
                {categories.map((v,i)=>{
                      if(v?.exists()){
                        return <option key={i} value={v?.data().category}>{v?.data().category}</option>
                      }            
                })}
              </select>
          </div>
          <label className="input input-bordered input-sm border-primary flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
  <table className="table table-zebra-zebra mt-5">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Details</th>
        <th>Tds</th>
        <th>Sds</th>
        <th>Minimum Order</th>
        <th>Code No.</th>
        <th>Packaging Size</th>
        <th>Inner Box</th>
        <th>Outer Carton</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {products.map((v,i)=>{
        if(v?.exists()){
          const product:Product = v?.data()
          return <TableAdapter {...product} key={i}/>
        }
      })}
    </tbody>
    
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Details</th>
        <th>Tds</th>
        <th>Sds</th>
        <th>Minimum Order</th>
        <th>Code No.</th>
        <th>Packaging Size</th>
        <th>Inner Box</th>
        <th>Outer Carton</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </Dashboard>
  )
}

export default Products