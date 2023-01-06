import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Empty = () => {
  return (
    <div className='d-flex justify-content-center text-white lead'>
      <FaExclamationCircle size='30' className='text-danger mx-2' />
      No results!
    </div>
  )
}

export default Empty
