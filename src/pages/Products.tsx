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
  const [temparr, settemparr] = useState<Product[]>([])
  const [editProduct, seteditProduct] = useState<Product>()
  const [searchQuery, setsearchQuery] = useState('')
  const [selectedCat, setselectedCat] = useState('')
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

  const resetTempArr = ()=>{
    settemparr(products.map((v)=>{
      const product:Product = v?.data()
      product.dbRef = v.ref
      return product
  }))
  }

  useEffect(() => {
    resetTempArr()
  }, [products])

  useEffect(() => {
    resetTempArr()
    const simplified = searchQuery.toLowerCase().trim()
    if(!simplified){
      resetTempArr()
    }
    else{
      settemparr(p=>
        p.filter((v)=>
          String(v.category).toLowerCase().trim().includes(simplified)||
          String(v.codeNumber).toLowerCase().trim().includes(simplified)||
          String(v.name).toLowerCase().trim().includes(simplified)||
          String(v.description).toLowerCase().trim().includes(simplified)
        ))
    }
  }, [searchQuery])

  useEffect(() => {
    resetTempArr()
    if(selectedCat=="all"){
      resetTempArr()
    }
    else{
      settemparr((p)=>p.filter((v)=>{
        return String(v.category).toLowerCase().trim().includes(selectedCat.toLowerCase().trim())
      }))
    }
  }, [selectedCat])
  
  
 
  
  
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
            <select className="select select-bordered w-full max-w-xs border-primary select-sm" onChange={e=> setselectedCat(e.target.value)}>
                <option disabled selected>Category</option>
                {categories.map((v,i)=>{
                      if(v?.exists()){
                        return <option key={i} value={v?.data().category}>{v?.data().category}</option>
                      }            
                })}
                <option value="all">All</option>
              </select>
          </div>
          <label className="input input-bordered input-sm border-primary flex items-center gap-2">
            <input type="text" value={searchQuery} onChange={e=> setsearchQuery(e.target.value)} className="grow" placeholder="Search" />
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
      {temparr.map((v,i)=><TableAdapter setEdit={seteditProduct} reload={getProducts} {...v} key={i}/>)}
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