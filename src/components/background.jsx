import React from 'react'

const background = () => {
  return (
    <div>
      <div className='foregrounded absolute bg-gray-700 h-full w-full z-[2]'>
          <div className='navbar h-[10vh] width-100% flex justify-center  my-3 text-gray-900'>DOCUMENTS</div>
          <span className='background_name relative top-[50%] left-[50%] -translate-x-[40%] -translate-y-[150%] inline-block text-5xl font-semibold'>DOCS.</span>
        </div>
    </div>
  )
}

export default background
