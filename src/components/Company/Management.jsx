import React from 'react'
import Management01 from '../../assets/management01.png'

const Management = () => {
  return (
    <div className='w-11/12 m-auto'>
      <div>
        <h1 className='font-bold text-2xl mb-6'>Management</h1>
      </div>
      <div>
        <img src={Management01} alt="" className='mb-6'/>
      </div>
      <div className='mx-[6rem]  text-xl'>
        <h1>COMPOSITION OF BOARD AND ITS COMMITTEES </h1>
      </div>
    </div>
  )
}

export default Management
