import React from 'react'
//import Newnote from './Newnote'
import Button from './Button.jsx'
function Header() {

  return (
    <>
    <div className='bg-[#6C22A6] h-24 flex items-center justify-between top-0'>
        <h1 className='pl-4 text-white font-bold mb-4 text-4xl'>Notes App</h1>
        {/* <button className='border-3 rounded-lg w-24 h-8 center bg-[#96E9C6] font-bold mr-4' onClick={New}>New</button> */}

        {/* <Button  /> */}
    </div>
    <Button  /> 
     </>
  )
}

export default Header