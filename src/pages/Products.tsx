import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Common/Header'
import { Plus } from 'lucide-react'
import TableAdapter from '../components/Products/TableAdapter/TableAdapter'

const Products = () => {
  return (
    <Dashboard>
      <div className="flex itesm-center justify-between">
      <Header>Products</Header>
      <button className="btn btn-primary btn-sm"><Plus size={16}/>New</button>
      </div>
      <div className="overflow-x-auto mt-10">
  <table className="table table-zebra-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Tds</th>
        <th>Sds</th>
        <th>Minimum Order</th>
        <th>Code No.</th>
        <th>Packaging Size</th>
        <th>Inner Box</th>
        <th>Outer Carton</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {Array(10).fill("_").map((v,i)=> <TableAdapter key={i}/>)}
    </tbody>
    
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Tds</th>
        <th>Sds</th>
        <th>Minimum Order</th>
        <th>Code No.</th>
        <th>Packaging Size</th>
        <th>Inner Box</th>
        <th>Outer Carton</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </Dashboard>
  )
}

export default Products