


const OrderAdapter = (order:ProductOrder) => {
  return (
    <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={order.productImage} />
              </div>
            </div>
          </div>
        </td>
        <td>
          {order.productName}
        </td>
        <td>{order.productCode}</td>
        <td>{order.quantity}</td>
        <td>{order.customerName}</td>
        <td>{order.email}</td>
        <td>{order.phone}</td>
        <td>{order.businessName}</td>
        <td>{order.address}</td>
      </tr>
  )
}

export default OrderAdapter