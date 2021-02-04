import React, {useContext, useEffect, useState} from 'react'
// import NotesContext from '../Context/NotesContext'

// const useMousePos = () => {
//   // const [pos, setPos] = useState({x:0, y:0})


//   // useEffect(()=>
//   // {
//   //   const handleMouseMove = (e) => setPos({x:e.pageX, y:e.pageY})

//   //   document.addEventListener('mousemove', handleMouseMove)

//   //   return () => {
//   //     document.removeEventListener('mousemove', handleMouseMove)
//   //   }

//   // },[])

//   // return pos
// }

const Note = () => {
  // const {dispatch} = useContext(NotesContext)

  // const pos = useMousePos()

  // const delNote = (title) => (
  //   dispatch({type:"DEL_NOTE", title})
  // )

  return (
    <div>
        <h1>Note</h1>
    </div>
  )
}

export default Note