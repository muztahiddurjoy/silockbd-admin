import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import ContactAdapter from '../components/Contact/ContactAdapter'

const Contact = () => {
  return (
    <Dashboard>
      <div className="flex items-center justify-between mb-10">
      <Header>Contact Response</Header>
      </div>
      {Array(10).fill("_").map((v)=><ContactAdapter key={v}/>)}
    </Dashboard>
  )
}

export default Contact