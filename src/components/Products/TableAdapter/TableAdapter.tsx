import { deleteDoc } from "firebase/firestore"
import { Download, Edit, Loader2, Trash, X } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

const TableAdapter = (props:Product) => {
  const [deleteOpen, setdeleteOpen] = useState(false)
  const [deleting, setdeleting] = useState(false)

  const deleteProduct = ()=>{
    setdeleting(true)
    deleteDoc(props.dbRef).then(()=>{
      if(props.reload){
        props.reload()
      }
      toast.success('Deleted Successfully!',{
        position:'bottom-right'
      })
    }).catch((err)=>{
      console.log(err)
      toast.error('Couln\'t delete. Check console.',{
        position:'bottom-right'
      })
    }).finally(()=>{
      setdeleting(false)
    })
  }
  return (
    <tr>
        
        <td className="">
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {typeof props.image =="string" ?<img src={props.image} alt="Avatar Tailwind CSS Component" />:<div></div>}
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{props.name}</div>
              <div className="text-sm opacity-50">{String(props.description).substring(0,30)}...</div>
        </div>
        </td>
        <td>
          <a href={String(props.tds)} target="_blank">
            <button className="btn btn-xs btn-primary"><Download size={16}/></button>
          </a>
        </td>
        <td>
          <a href={String(props.sds)} target="_blank">
            <button className="btn btn-xs btn-primary"><Download size={16}/></button>
          </a>
        </td>
        <td>{props.minimum_order}</td>
        <td>
          {props.codeNumber}
        </td>
        <td>{props.packagingSize} ml</td>
        <td>
          {props.innerBox} pcs
        </td>
        <td>
          {props.outerCarton} pcs
        </td>
        {deleteOpen?<td>
          <button className="btn btn-sm btn-error text-white" disabled={deleting} onClick={deleteProduct}>{deleting?<Loader2 className="animate-spin" size={16}/>:<Trash size={16}/>}</button>
          <button className="btn btn-sm btn-success text-white ml-1"><X size={16}/></button>
        </td>:<td>
          <button className="btn btn-sm btn-primary" onClick={()=>props.setEdit&&props.setEdit(props)}><Edit size={16}/></button>
          <button className="btn btn-sm btn-error text-white ml-1" onClick={()=>setdeleteOpen(true)}><Trash size={16}/></button>
        </td>}
      </tr>
  )
}

export default TableAdapter