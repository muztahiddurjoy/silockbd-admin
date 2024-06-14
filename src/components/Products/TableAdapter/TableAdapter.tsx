import { Download, Edit, X } from "lucide-react"

const TableAdapter = () => {
  return (
    <tr>
        
        <td className="w-[80px]">
                <img src="https://www.silock.com.my/news_file/1996389322how%20to%20apply%20epoxy.jpg" alt="Avatar Tailwind CSS Component" className="w-[80px] h-[80px] object-cover rounded-md" />
        </td>
        <td>
          <p className="font-medium text-md">Random Product</p>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet.....</p>

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