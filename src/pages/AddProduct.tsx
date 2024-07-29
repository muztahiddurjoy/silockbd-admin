import { useState } from "react"
import Header from "../components/Common/Header"
import Dashboard from "../components/Dashboard/Dashboard"
import ProductImage from "../components/Products/AddProduct/ProductImage/ProductImage"
import { Save, Upload } from "lucide-react"



const AddProduct = () => {
    const [photo, setphoto] = useState<File>()
    const [details, setdetails] = useState<Product>({
      codeNumber:'',
      description:'',
      innerBox:'',
      minimum_order:'',
      name:'',
      outerCarton:'',
      packagingSize:'',
      sds:'',
      tds:''
    })
  return (
    <Dashboard>
        <Header>Add Product</Header>
        <div className="mt-5">
            {/* <p className="font-medium">Product Images</p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:grid-cols-5">
                <ProductImage photo={photo} setphoto={setphoto}/>
                <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="">
                    <label className="text-sm text-primary">Code Number</label> <br />
                    <input type="text" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.codeNumber} onChange={e=> setdetails(p=>({...p,codeNumber:e.target.value}))} />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="text-sm text-primary">Product Name</label> <br />
                    <input type="text" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.name} onChange={e=> setdetails(p=>({...p,name:e.target.value}))} />
                  </div>
                  <div className="lg:col-span-3">
                    <label className="text-sm text-primary">Product Description</label> <br />
                    <textarea rows={30} className="input min-h-[100px] input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.description} onChange={e=> setdetails(p=>({...p,description:e.target.value}))}></textarea>
                  </div>
                </div>
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 p-3 border border-primary/30 rounded-[5px]">
                <p className="lg:col-span-3 col-span-2 font-bold">Packaging Details</p>
                  <div className="">
                    <label className="text-sm text-primary">Packaging Size (ml)</label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.packagingSize} onChange={e=> setdetails(p=>({...p,packagingSize:e.target.value}))} />
                  </div>
                  <div className="">
                    <label className="text-sm text-primary">Inner Box (Quantity)</label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.innerBox} onChange={e=> setdetails(p=>({...p,innerBox:e.target.value}))} />
                  </div>
                  <div className="">
                    <label className="text-sm text-primary">Outer Box (Quantity) </label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.outerCarton} onChange={e=> setdetails(p=>({...p,outerCarton:e.target.value}))} />
                  </div>
                </div>
                <div className="lg:col-span-2 p-3 border border-primary/30 rounded-[5px] ">
                <p className="font-bold">Files (PDF)</p>
                <div className="flex items-center justify-center mt-3 gap-3">
                  <button className="btn btn-sm btn-primary relative">
                    {details.tds?<p>TDS Attached!</p>:<>TDS <Upload size={16}/></>}
                    <input type="file" className="absolute top-0 left-0 right-0 bottom-0 opacity-0" accept=".pdf" onChange={e=> e.target.files&&setdetails(p=>({...p,tds:e.target.files[0]}))} />
                  </button>
                  <button className="btn btn-sm btn-primary relative">
                    {details.sds?<p>SDS Attached!</p>:<>SDS <Upload size={16}/></>}
                    <input type="file" className="absolute top-0 left-0 right-0 bottom-0 opacity-0" accept=".pdf" onChange={e=> e.target.files&&setdetails(p=>({...p,sds:e.target.files[0]}))} />
                  </button>
                </div>
                  
                </div> 
            </div>
            <div className="flex justify-end">  
              <button className="btn btn-primary mt-3">Publish <Save size={18} /></button>
            </div>
            
        </div>
    </Dashboard>
  )
}

export default AddProduct