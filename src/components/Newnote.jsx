import React from 'react'

function Newnote() {
  return (
  //  console.log("hello")
       <div className='mt-4 ml-4 text-black min-h-36 bg-[#6962AD] w-1/4 rounded-xl '>
        <ul>
          {notes.list.map((note) => (
            <li key={note.key}>
              <div className='font-bold text-black ml-4 pt-3 text-2xl capitalize'>{note.title} </div>
              <div className='ml-4 text-lg text-white pt-3'>{note.note} </div>
              <form><textarea className='ml-4 text-lg text-white pt-3 ' value={note.note} /></form>
            </li>
          ))}
        </ul>
      </div> 
  )
}

export default Newnote