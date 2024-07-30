import { Download, Edit, X } from "lucide-react"

const TableAdapter = (props:Product) => {
  return (
    <tr>
        
        <td className="">
        <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {typeof props.image =="string" ?<img src={props.image} alt="Avatar Tailwind CSS Component" />:<div></div>}
              </div>
            </div>
            
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{props.name}</div>
              <div className="text-sm opacity-50">{String(props.description).substring(0,30)}...</div>
        </div>
        </td>
        <td>
          <a href={String(props.tds)} target="_blank">
            <button className="btn btn-xs btn-primary"><Download size={16}/></button>
          </a>
        </td>
        <td>
          <a href={String(props.sds)} target="_blank">
            <button className="btn btn-xs btn-primary"><Download size={16}/></button>
          </a>
        </td>
        <td>{props.minimum_order}</td>
        <td>
          {props.codeNumber}
        </td>
        <td>{props.packagingSize} ml</td>
        <td>
          {props.innerBox} pcs
        </td>
        <td>
          {props.outerCarton} pcs
        </td>
        <td>
          <button className="btn btn-sm btn-primary"><Edit size={16}/></button>
          <button className="btn btn-sm btn-error text-white ml-1"><X size={16}/></button>
        </td>
      </tr>
  )
}

export default TableAdapter