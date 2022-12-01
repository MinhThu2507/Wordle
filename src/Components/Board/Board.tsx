import React from 'react'
import Keyboard from '../Keyboard/Keyboard'
import Square from '../Square/Square'
import './board.css'
type Props = {
    board: string[]
}

const Board:React.FC<Props> = ({board}: Props) => {
  return (
    <>
        <div className='board'>
            {board.map((square, index)=> {
                return (
                   <> <Square value={square} squareIdx={index}/></>
                )
            })}
        </div>
        <div className='keyboard'>
          <Keyboard />
        </div>
    </>
  )
}

export default Board