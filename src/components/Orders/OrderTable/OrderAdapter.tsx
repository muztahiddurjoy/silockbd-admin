import { Edit, ExternalLink, X } from "lucide-react"

const OrderAdapter = () => {
  return (
    <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.silock.com.my/photo_file/4887450281SL-900S.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Random Product</div>
              <div className="text-sm opacity-50">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </td>
        <td>
          #A1B2C3234
        </td>
        <td>Pending</td>
        <td>Pending</td>
        <td>{new Date().toDateString()}</td>
        <td>-</td>
        <th>
        <button className="btn btn-sm btn-primary"><ExternalLink size={16}/></button>
        <button className="btn btn-sm btn-secondary text-white ml-1"><Edit size={16}/></button>
        </th>
      </tr>
  )
}

export default OrderAdapter