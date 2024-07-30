import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import { Delete, Loader2, Plus, Trash } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import { addDoc, collection, DocumentData, getDocs, query, QuerySnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { toast } from 'react-toastify'
import CategoryAdapter from '../components/Category/CategoryAdapter'

const Categories = () => {
  const [categories, setcategories] = useState<DocumentData[]>([])
  const [newCat, setnewCat] = useState('')
  const [uploading, setuploading] = useState(false)
  const getCategories = async  ()=>{
    const result = await getDocs(collection(db,'categories'))
    setcategories(result.docs)
  }

  useEffect(() => {
    getCategories()
  }, [])


  
  

  const createCategory = (e:FormEvent)=>{
    e.preventDefault()
    setuploading(true)
    addDoc(collection(db,'categories'),{
      category:newCat,
      timeStamp:new Date().toISOString()
    }).then(()=>{
      setnewCat('')
      toast.success('Category added',{
        position:'bottom-right'
      })
      getCategories()
    }).catch((err)=>{
      console.log(err)
      toast.error('Couldn\'t add category',{
        position:'bottom-right'
      })
    }).finally(()=>{
      setuploading(false)
    })
  }

  return (
    <Dashboard>
      <div className="flex items-center justify-between">
      <Header>Categories</Header>
      {/* <button className="btn btn-primary btn-sm"><Plus size={16}/>New</button> */}
      </div>
      <form className="flex justify-end mt-5" onSubmit={createCategory}>
        <input type="text" value={newCat} onChange={e=> setnewCat(e.target.value)} className='border border-gray-400 px-3 rounded-r-none rounded-l-md focus:border-primary focus:outline-none focus:rounded-r-none' placeholder='New Category' />
        <button type='submit' disabled={!newCat||uploading} className='btn btn-primary rounded-l-none'>Add {uploading?<Loader2 size={18} className='animate-spin'/>:<Plus size={18}/>}</button>
      </form>
      <div className="mt-10">
        {categories.map((v,i)=>{
          if(v?.exists()){
            return <CategoryAdapter category={v?.data().category} dbRef={v?.ref} reload={getCategories} key={i}/>
          }
          
        })}
      </div>
    </Dashboard>
  )
}

export default Categories