import React from 'react'

const ContactAdapter = (props:Contact) => {
  return (
    <div className='card my-3 p-2 border border-primary/30 rounded-md [&>p]:text-primary [&>p]:text-sm [&>p]:my-1'>
      
      <p className=' font-semibold mb-5'>Enquiry : <span className='text-gray-600'>{props.enquiry}</span></p>
      <p className=''>Name : <span className='text-gray-600'>{props.name}</span></p>
      <p className=''>Email : <span className='text-gray-600'>{props.email}</span></p>
      <p className=''>Company Website : <span className='text-gray-600'>{props.companyWebsite}</span></p>
      <p className=''>Company Name : <span className='text-gray-600'>{props.companyName}</span></p>
      <p className=''>Tel : <span className='text-gray-600'>{props.telNumber}</span></p>
      <p className=''>Mobile : <span className='text-gray-600'>{props.mobileNumber}</span></p>
      <p className=''>Country : <span className='text-gray-600'>{props.country}</span></p>
      <p className=''>Address : <span className='text-gray-600'>{props.address}</span></p>
      
    </div>
  )
}

export default ContactAdapter