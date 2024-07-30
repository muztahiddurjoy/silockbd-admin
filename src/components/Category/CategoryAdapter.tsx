import { deleteDoc, DocumentReference } from 'firebase/firestore'
import { Check, Trash, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface CategoryAdapterProps{
    reload:Function
    dbRef:any
    category:string
}

const CategoryAdapter = (props:CategoryAdapterProps) => {
    const [deleteOpen, setdeleteOpen] = useState(false)
    
    const deleteCategory = ()=>{
        deleteDoc(props.dbRef).then(()=>{
            setdeleteOpen(false)
            props.reload()
            toast.success('Category Deleted',{
                position:'bottom-right'
            })
        }).catch((err)=>{
            console.log(err)
            toast.error('Database Error',{
                position:'bottom-right'
            })
        })
    }
  return (
    <div className='my-2  bg-white p-3 rounded-md flex justify-between items-center'>
        <p className="text-sm font-semibold">{props.category}</p>
        {deleteOpen?<div className='flex items-center justify-end  gap-1'>
            <button className='btn btn-sm btn-error text-white' onClick={deleteCategory}><Check size={16}/></button>
            <button className='btn btn-sm btn-success text-white' onClick={()=>setdeleteOpen(false)}><X size={16}/></button>
        </div>:<button className='btn btn-sm btn-error text-white' onClick={()=> setdeleteOpen(true)}>
            <Trash size={16}/>
        </button>}

    </div>
  )
}

export default CategoryAdapter