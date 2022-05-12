import React from 'react'

function Button({children}) {
  return (
    <button className='bg-white p-[24px] rounded-full w-[231px] shadow'>{children}</button>
  )
}

export default Button