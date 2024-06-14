import React from 'react'

const Header = ({children}:React.PropsWithChildren) => {
  return (
    <h1 className='text-3xl font-bold'>{children}</h1>
  )
}

export default Header