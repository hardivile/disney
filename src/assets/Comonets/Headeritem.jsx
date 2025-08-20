import React from 'react'

function Headeritem( {name,Icon} ) {
  return (
    <div  className='text-white flex items-center gap-3
    text-[15px] font-semibold  cursor-pointer hover:underline
    underline-offset-8 mb-2
    ' >
        {/* underline-offset-8 rendre le sourlignement du hover en dessous de 8px */}
        <Icon/>
        <h2 className="">{name} </h2>
       

    </div>
  )
}

export default Headeritem
