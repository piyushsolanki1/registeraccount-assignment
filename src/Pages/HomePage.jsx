import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Welcome Home!</h1>
      <div className='flex gap-4'>
        <Link to="/account" className='bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded'>View Account</Link>
        <Link to="/" className='bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded'>Logout</Link>
      </div>
    </div>
  )
}

export default HomePage
