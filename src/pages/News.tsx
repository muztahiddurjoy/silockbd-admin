import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import NewsAdapter from '../components/News/NewsAdapter'
import AddNews from '../components/News/AddNews'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const News = () => {
    const [news, setnews] = useState<News[]>([])
    const getNews = ()=>{
        setnews([])
        getDocs(collection(db,'news')).then((result)=>{
            result.docs.map((v)=>{
                if(v.exists()){
                    const data = v?.data()
                    setnews(p=> p.filter((v)=> (v.date==data.date) && (v.desc==data.desc) && (v.title==data.title)).length==0?[...p,{
                        date:data.date,
                        desc:data.desc,
                        title:data.title
                    }]:p)
                }
            })
        })
    }

    useEffect(() => {
      getNews()
    }, [])

    
    
  return (
    <Dashboard>
      <div className="flex items-center justify-between mb-10">
      <Header>News and Updates</Header>
      </div>
      <p className='mt-5 mb-3 text-xl font-bold'>Add News</p>
      <AddNews reload={getNews}/>
      <p className='mb-3 text-xl font-bold mt-10'>Uploaded News</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {news.map((v,i)=><NewsAdapter date={v.date} desc={v.desc} title={v.title} dbRef={v.dbRef} reload={getNews} key={i}/>)}
      </div>
    </Dashboard>
  )
}

export default News