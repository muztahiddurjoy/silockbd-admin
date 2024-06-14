import { Download, Edit, X } from "lucide-react"

const TableAdapter = () => {
  return (
    <tr>
        
        <td className="">
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
            <button className="btn btn-xs btn-primary"><Download size={16}/></button>
        </td>
        <td>
        <button className="btn btn-xs btn-primary"><Download size={16}/></button>
        </td>
        <td>100</td>
        <td>
          2A3B6969
        </td>
        <td>20 in</td>
        <td>
          30 in
        </td>
        <td>
          10 in
        </td>
        <td>
          <button className="btn btn-sm btn-primary"><Edit size={16}/></button>
          <button className="btn btn-sm btn-error text-white ml-1"><X size={16}/></button>
        </td>
      </tr>
  )
}

export default TableAdapter