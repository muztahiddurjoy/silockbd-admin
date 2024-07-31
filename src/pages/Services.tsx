import { useEffect, useState } from "react"
import Header from "../components/Common/Header"
import Dashboard from "../components/Dashboard/Dashboard"
import AddService from "../components/Services/AddService"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import ServiceAdapter from "../components/Services/ServiceAdapter"


const Services = () => {
  const [services, setservices] = useState<Service[]>([])
  const getServices = ()=>{
      setservices([])
      getDocs(collection(db,'services')).then((result)=>{
          result.docs.map((v)=>{
              if(v.exists()){
                  const data = v?.data()
                  setservices(p=> p.filter((v)=> (v.desc==data.desc) && (v.title==data.title)).length==0?[...p,{
                      desc:data.desc,
                      title:data.title,
                      dbRef:v.ref
                  }]:p)
              }
          })
      })
  }

  useEffect(() => {
    getServices()
  }, [])
  return (
    <Dashboard>
        <div className="flex items-center justify-between mb-10">
            <Header>Services</Header>
        </div>
        <p className='mt-5 mb-3 text-xl font-bold'>Add Service</p>
        <AddService reload={getServices}/>
        <p className='mb-3 text-xl font-bold mt-10'>Uploaded Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((v,i)=><ServiceAdapter desc={v.desc} title={v.title} dbRef={v.dbRef} reload={getServices} key={i}/>)}
        </div>
    </Dashboard>
  )
}

export default Services