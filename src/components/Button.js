import React from 'react'

const Button = ({ children }) => {
  return (
   <button className=' w-64 text-xl bg-gradient-to-r from-blue-500 vai-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-white'>{children}</button>
  )
}

export default Button