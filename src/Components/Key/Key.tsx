import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increasePosition, setBoard } from '../../Redux/reducers/boardReducer'
import { RootState } from '../../Redux/store'
import './key.css'
type Props = {
  letter: string
}

const Key: React.FC<Props> = ({ letter }: Props) => {

  const { board, position, row } = useSelector((state: RootState) => state.boardReducer)

  const dispatch = useDispatch()
  // ! Công thức tính hàng (row) với 6 cột 5 hàng
  // ! ( vị trí 0 -> 4) vị trí thứ 1 / 5 => 0.2 => Math.floor => làm tròn thành 0 => hàng 0
  // ! Nếu nhập quá 6 dòng và 5 cột thì sẽ không tự in ra cột mới dòng mới 
  const currentRow = Math.floor(position / 5)

  const handleChooseLetter = () => {
   
    if(currentRow > row) return 
    console.log('currentRow: ' + currentRow)
    // không thể nhập quá 6 dòng 5 cột
    if (position >= 30) return

    const newBoard = [...board]
    newBoard[position] = letter
    dispatch(setBoard(newBoard))
    dispatch(increasePosition())
  }

  return (
    <div className='letter' onClick={handleChooseLetter}>
      {letter}
    </div>
  )
}

export default Key