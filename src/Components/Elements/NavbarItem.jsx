import React from 'react'

function NavbarItem({name}) {
  return (
    <div className='text-white flex gap-3 items-center text-[19px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'>
        <h4>{name}</h4>
    </div>
  )
}

export default NavbarItem