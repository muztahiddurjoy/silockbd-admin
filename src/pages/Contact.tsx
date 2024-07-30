import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import ContactAdapter from '../components/Contact/ContactAdapter'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Contact = () => {
  const [contacts, setcontacts] = useState<Contact[]>([])
  const getContact = ()=>{
    getDocs(collection(db,'messages')).then((res)=>{
      setcontacts([])
      res.docs.map((v)=>{
        if(v.exists()){
          setcontacts(p=>[...p,v.data() as any])
        }
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    getContact()
  }, [])
  
  return (
    <Dashboard>
      <div className="flex items-center justify-between mb-10">
      <Header>Contact Response</Header>
      </div>
      {contacts.sort((prev,next)=>Number(next.time)-Number(prev.time)).reverse().map((v,i)=><ContactAdapter {...v} key={i}/>)}
      {/* {Array(10).fill("_").map((v)=><ContactAdapter key={v}/>)} */}
    </Dashboard>
  )
}

export default Contact