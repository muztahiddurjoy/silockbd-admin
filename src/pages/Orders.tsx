import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'

const Orders = () => {
  return (
    <Dashboard>
      <div className="flex itesm-center justify-between">
      <Header>Orders</Header>
      {/* <button className="btn btn-primary btn-sm"><Plus size={16}/>New</button> */}
      </div>
    </Dashboard>
  )
}

export default Orders