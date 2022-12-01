import React, { useEffect, useState } from 'react'
import './square.css'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
type Props = {
    value: string;
    squareIdx: number
}

const Square:React.FC<Props>= ({value, squareIdx}: Props) => {

  const {correctWord, position, row} = useSelector((state: RootState) => state.boardReducer)

  const [correct, setCorrect] = useState(false)
  const [almost, setAlmost] = useState(false)
  const [wrong, setWrong] = useState(false)

  const wordLastIndex = 4
  const currentPos = position === 5
                  ? wordLastIndex 
                  : position > 5  && position % 5 === 9  
                  ? wordLastIndex 
                  : (position % 5 -1)

  useEffect(() => {
    // ! Kiểm tra nếu correctWord: CONES 
    // ! correctWord[currentPos] = correctWord[0] => C === từ mình nhập vào => true
      if(correctWord[currentPos] === value) {
        setCorrect(true)
        // ! Nếu không đúng và giá trị nhập vào khác rỗng hoặc từ mình nhập có trong CONES => thì gần đúng (almost)
      }else if (!correct && value != '' && correctWord.includes(value)){
        setAlmost(true)
      }else if(!correct && value != '' && !correctWord.includes(value)){
        setWrong(true)
      }
      return () => {
        setCorrect(false)
        setAlmost(false)
        setWrong(false)
      }
  }, [value])



  const variants = {
    filled: () => ({
      // phóng to lên 1.2 rồi trở về bình thường
      scale: [1.2,1],
      transition: {
        duration: 0.2
      }
    }),
    unfilled: () => ({
      scale: [1.2,1],
      transition: {
        duration: 0.2}
    })
  }

  const status: any = Math.floor(squareIdx / 5) < row &&(correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '')

  return (
    <motion.div animate={value ? 'filled' : 'unfilled'} variants={variants}>
    <div className='square' id={status}>
      {value}
    </div>
    </motion.div>
    
  )
}

export default Square