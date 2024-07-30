import { useEffect, useState } from "react"
import Header from "../components/Common/Header"
import Dashboard from "../components/Dashboard/Dashboard"
import ProductImage from "../components/Products/AddProduct/ProductImage/ProductImage"
import { Loader2, Save, Upload } from "lucide-react"
import { uploadBytes, ref as storageRef, getDownloadURL } from "firebase/storage"
import { db, storage } from "../firebase"
import { addDoc,collection, DocumentData, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"




const AddProduct = () => {
    const [photo, setphoto] = useState<File|null>()
    const [categories, setcategories] = useState<DocumentData[]>([])
    const [details, setdetails] = useState<Product>({
      codeNumber:'',
      description:'',
      innerBox:'',
      minimum_order:'',
      name:'',
      outerCarton:'',
      packagingSize:'',
      sds:'',
      tds:'',
      category:''
    })
    const [uploading, setuploading] = useState(false)


    const getCategories = async  ()=>{
      const result = await getDocs(collection(db,'categories'))
      setcategories(result.docs)
    }

    const sendToFirebase = async ()=>{
      setuploading(true)
      if(photo&&details.tds instanceof File &&details.sds instanceof File){
        const image =  await getDownloadURL((await uploadBytes(storageRef(storage,`/products/${photo?.name}`),photo)).ref)
        const tds = await getDownloadURL(((await uploadBytes(storageRef(storage,`/tds/${details.tds?.name}`),details.tds)).ref))
        const sds = await getDownloadURL(((await uploadBytes(storageRef(storage,`/sds/${details.sds?.name}`),details.sds)).ref))
        addDoc(collection(db,'products'),{...details,image,tds,sds}).then(()=>{
          setdetails({
            codeNumber:'',
            description:'',
            innerBox:'',
            minimum_order:'',
            name:'',
            outerCarton:'',
            packagingSize:'',
            sds:'',
            tds:'',
            category:''
          })
          setphoto(null)
          toast.success('Product Added',{
            position:'bottom-right'
          })
        }).catch((err)=>{
          console.log(err)
          toast.error('Failed to upload',{
            position:'bottom-right'
          })
        }).finally(()=>{
          setuploading(false)
        })
        
      }
      else{
        console.log("Not a file")
        setuploading(false)
        toast.error('Select a file',{
          position:'bottom-right'
        })
      }
      
    }

    useEffect(() => {
      getCategories()
    }, [])
    
    
  return (
    <Dashboard>
        <Header>Add Product</Header>
        <div className="mt-5">
            {/* <p className="font-medium">Product Images</p> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:grid-cols-5">
              <div className="h-full">
                <ProductImage photo={photo} setphoto={setphoto}/>
                <div className="">
                  <label className="text-sm text-primary">Category</label> <br />
                  <select className="select w-full max-w-xs focus:outline-none border border-primary/30 focus:border-primary" onChange={e=> setdetails(p=>({...p,category:e.target.value}))}>
                    <option disabled selected>Category</option>
                    {categories.map((v,i)=>{
                      if(v?.exists()){
                        return <option key={i} value={v?.data().category}>{v?.data().category}</option>
                      }            
                    })}
                  </select>
                  </div>
                </div>
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
                <p className="lg:col-span-4 col-span-2 font-bold">Packaging Details</p>
                  <div className="">
                    <label className="text-sm text-primary">Packaging Size (ml)</label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.packagingSize} onChange={e=> setdetails(p=>({...p,packagingSize:e.target.value}))} />
                  </div>
                  <div className="">
                    <label className="text-sm text-primary">Inner Box (pcs)</label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.innerBox} onChange={e=> setdetails(p=>({...p,innerBox:e.target.value}))} />
                  </div>
                  <div className="">
                    <label className="text-sm text-primary">Outer Box (pcs) </label> <br />
                    <input type="number" className="input input-sm w-full border-primary/30 focus:outline-none focus:border-primary" value={details.outerCarton} onChange={e=> setdetails(p=>({...p,outerCarton:e.target.value}))} />
                  </div>
                  <div className="h-full flex items-end flex-col">
                    <label className="text-sm text-primary w-[150px]">Min Order (pcs)</label><br />
                    <input type="number" className="input input-sm w-[150px] border-primary/30 focus:outline-none focus:border-primary" value={details.minimum_order} onChange={e=> setdetails(p=>({...p,minimum_order:e.target.value}))} />
                  </div>
                </div>
                <div className="lg:col-span-2 p-3 border border-primary/30 rounded-[5px] ">
                <p className="font-bold">Files (PDF)</p>
                <div className="flex items-center justify-center mt-3 gap-3">
                  <button className="btn btn-sm btn-primary relative">
                    {details.tds?<p>TDS Attached!</p>:<>TDS <Upload size={16}/></>}
                    <input type="file" className="absolute top-0 left-0 right-0 bottom-0 opacity-0" accept=".pdf" onChange={e=> setdetails(p=> e.target.files!==null?({...p,tds:e.target.files[0]}):p)} />
                  </button>
                  <button className="btn btn-sm btn-primary relative">
                    {details.sds?<p>SDS Attached!</p>:<>SDS <Upload size={16}/></>}
                    <input type="file" className="absolute top-0 left-0 right-0 bottom-0 opacity-0" accept=".pdf" onChange={e=> setdetails(p=> e.target.files!==null?({...p,sds:e.target.files[0]}):p)} />
                  </button>
                </div>
                  
                </div> 
            </div>
            <div className="flex justify-end">  
              <button onClick={sendToFirebase} className="btn btn-primary mt-3" disabled={!photo||!details.name||!details.codeNumber||!details.description||!details.innerBox||!details.minimum_order||!details.outerCarton||!details.packagingSize||!details.tds||!details.sds||uploading||!details.category}>Publish {uploading?<Loader2 className="animate-spin" size={18}/>:<Save size={18} />}</button>
            </div>
            
        </div>
    </Dashboard>
  )
}

export default AddProduct