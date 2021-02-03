import React, {useContext, useEffect, useState} from 'react'
import NotesContext from '../Context/NotesContext'

const useMousePos = () => {
  const [pos, setPos] = useState({x:0, y:0})


  useEffect(()=>
  {
    const handleMouseMove = (e) => setPos({x:e.pageX, y:e.pageY})

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }

  },[])

  return pos
}

const Note = ({note}) => {
  const {dispatch} = useContext(NotesContext)

  const pos = useMousePos()

  const delNote = (title) => (
    dispatch({type:"DEL_NOTE", title})
  )

  return (
    <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p>{`${pos.x} : ${pos.y}`}</p>
        <button onClick={()=> delNote(note.title)}> X </button>
    </div>
  )
}

export default Note