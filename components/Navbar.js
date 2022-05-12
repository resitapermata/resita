import React from 'react'

const Navbar = () => {
  return (
    <div className='px-[24px] py-[17px] flex items-center bg-white'>
      <img className="h-[33px] mr-[13px]" src="assets/logos.png"/>
      <div>
          <div className='text-xs'>Good Morning</div>
          <h4 className='font-bold text-base'>Fellas</h4>
      </div>
    </div>
  )
}

export default Navbar