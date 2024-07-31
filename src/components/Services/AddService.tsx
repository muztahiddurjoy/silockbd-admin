import { addDoc, collection } from 'firebase/firestore'
import { Loader2, Upload } from 'lucide-react'
import { useState } from 'react'
import { db } from '../../firebase'
import { toast } from 'react-toastify'


const AddService = ({reload}:{reload?:Function}) => {
    const [Service, setService] = useState<Service>({
        desc:'',
        title:''
    })
    const [uploading, setuploading] = useState(false)
    const uploadService = ()=>{
        setuploading(true)
        addDoc(collection(db,'services'),Service).then(()=>{
            setService({
                desc:'',
                title:''
            })
            toast.success('Service Added Successfully!',{
                position:'bottom-right'
            })
            if(reload){
                reload()
            }
        }).catch((err)=>{
            console.log(err)
            
            toast.error('Couln\'nt upload Service. Check console',{
                position:'bottom-right'
            })
        }).finally(()=>{
            setuploading(false)
        })
    }
  return (
    <div className='card p-3 rounded-md bg-gray-300'>
            <div className="mt-2">
                <p className="text-sm mb-1">Title</p>
                <input type='text' value={Service.title} onChange={e=>setService((p)=>({...p,title:e.target.value}))} placeholder='Title' className='rounded-md p-2 w-full'/>
            </div>
            <div className="mt-2">
                <p className="text-sm mb-1">Description</p>
                <textarea rows={5} value={Service.desc} onChange={e=>setService((p)=>({...p,desc:e.target.value}))} placeholder='Description' className='rounded-md p-2 w-full'></textarea>
            </div>
            <div className="card-actions flex items-center justify-end mt-3">
                <button className='btn btn-primary btn-md' disabled={!Service.title||!Service.desc||uploading} onClick={uploadService}>{uploading?<Loader2 className='animate-spin' size={16}/>:<Upload size={16}/>}Upoad</button>
            </div>
        </div>
  )
}

export default AddService