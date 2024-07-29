import { useState } from "react"
import Header from "../components/Common/Header"
import Dashboard from "../components/Dashboard/Dashboard"



const AddProduct = () => {
    const [productDetails, setproductDetails] = useState<Product>({
        name:'',
        description:'',
        images:[],
        tds:'',
        sds:'',
        minimum_order:'',
        codeNumber:'',
        packagingSize:'',
        innerBox:'',
        outerCarton:''
    })
  return (
    <Dashboard>
        <Header>Add Product</Header>
        <div className="mt-5">
            <p className="font-medium">Product Images</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:grid-cols-5">
                
            </div>
        </div>
    </Dashboard>
  )
}

export default AddProduct