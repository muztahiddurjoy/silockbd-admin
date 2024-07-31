import { Edit, Save, Trash, X } from 'lucide-react'
import React, { useState } from 'react'


const NewsAdapter = (props:News) => {
    const [news, setnews] = useState<News>({
        date:props.date,
        desc:props.desc,
        title:props.title
    })
    const [edit, setedit] = useState(false)
    const [deleteOpen, setdeleteOpen] = useState(false)
    const saveChanges = ()=>{

    }
    const discardChanges = ()=>{
        setedit(false)
        setnews({
            date:props.date,
            desc:props.desc,
            title:props.title
        })
    }
    const deleteNews = ()=>{

    }
  return (
    <div className='card p-3 bg-gray-300 rounded-md'>
        {edit?<div>
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
                <button className='btn btn-primary btn-sm' onClick={saveChanges}><Save size={16}/>Save</button>
                <button className='btn btn-error btn-sm text-white' onClick={discardChanges}><X size={16}/>Discard</button>
            </div>
        </div>:
        <div>
            <p className="text-sm text-gray-500">{props.date}</p>
            <p className="text-blue-900 mt-3 font-semibold">{props.title}</p>
            <p className='text-gray-500 mt-1 text-sm'>{props.desc}</p>
            {deleteOpen?<div className="card-actions flex items-center justify-end mt-3">
                <button className='btn btn-primary btn-sm' onClick={()=>setdeleteOpen(false)}><X size={16}/>Back</button>
                <button className='btn btn-error btn-sm text-white' onClick={deleteNews}><Trash size={16}/>Confirm</button>
            </div>:
            <div className="card-actions flex items-center justify-end mt-3">
            <button className='btn btn-primary btn-sm' onClick={()=>setedit(true)}><Edit size={16}/>Edit</button>
            <button className='btn btn-error btn-sm text-white' onClick={()=>setdeleteOpen(true)}><Trash size={16}/>Delete</button>
        </div>}
        </div>
        }
        
    </div>
  )
}

export default NewsAdapter