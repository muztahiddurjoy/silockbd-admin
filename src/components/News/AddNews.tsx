import { addDoc, collection } from 'firebase/firestore'
import { Loader2, Upload } from 'lucide-react'
import { useState } from 'react'
import { db } from '../../firebase'
import { toast } from 'react-toastify'


const AddNews = ({reload}:{reload?:Function}) => {
    const [news, setnews] = useState<News>({
        date:'',
        desc:'',
        title:''
    })
    const [uploading, setuploading] = useState(false)
    const uploadNews = ()=>{
        setuploading(true)
        addDoc(collection(db,'news'),news).then(()=>{
            setnews({
                date:'',
                desc:'',
                title:''
            })
            toast.success('News Added Successfully!',{
                position:'bottom-right'
            })
            if(reload){
                reload()
            }
        }).catch((err)=>{
            console.log(err)
            
            toast.error('Couln\'nt upload news. Check console',{
                position:'bottom-right'
            })
        }).finally(()=>{
            setuploading(false)
        })
    }
  return (
    <div className='card p-3 rounded-md bg-gray-300'>
        
            <div className="">
                <p className="text-sm mb-1">Date</p>
                <input type='date' value={news.date} onChange={(e)=>setnews(p=>({...p,date:e.target.value}))} className='rounded-md p-2 w-full'/>
            </div>
            <div className="mt-2">
                <p className="text-sm mb-1">Title</p>
                <input type='text' value={news.title} onChange={e=>setnews((p)=>({...p,title:e.target.value}))} placeholder='Title' className='rounded-md p-2 w-full'/>
            </div>
            <div className="mt-2">
                <p className="text-sm mb-1">Description</p>
                <textarea rows={5} value={news.desc} onChange={e=>setnews((p)=>({...p,desc:e.target.value}))} placeholder='Description' className='rounded-md p-2 w-full'></textarea>
            </div>
            <div className="card-actions flex items-center justify-end mt-3">
                <button className='btn btn-primary btn-md' disabled={!news.date||!news.title||!news.desc||uploading} onClick={uploadNews}>{uploading?<Loader2 className='animate-spin' size={16}/>:<Upload size={16}/>}Upoad</button>
            </div>
        </div>
  )
}

export default AddNews