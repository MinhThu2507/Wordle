import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreasePosition, increaseRow, setBoard } from '../../Redux/reducers/boardReducer'
import { RootState } from '../../Redux/store'
import Key from '../Key/Key'
import './keyboard.css'
import words from '../../words.json'

type Props = {}

const Keyboard: React.FC<Props> = (props: Props) => {
    const rows: string[] = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m']

    const { position, board, row, correctWord } = useSelector((state: RootState) => state.boardReducer)

    const wordList: string[] = words.words
    console.log(correctWord)

    let board5Word: string = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${board[position - 2]}${board[position - 1]}`.toLowerCase()
    const dispatch = useDispatch()

    const handleClickBack = () => {
        // nếu nhấn enter hoàn thành xong 1 hàng thì không thể nhấn back lại hàng đó
        if (Math.floor((position - 1) % 5) < row) return
        const newBoard = [...board]
        newBoard[position - 1] = ''
        dispatch(decreasePosition())
        dispatch(setBoard(newBoard))
    }

    const handleClickEnter = () => {
        if ((wordList.includes(board5Word)) === false){
            alert('Invalid word')
        }
        else if (wordList.includes(board5Word)) {
            console.log('valid')
            if (position % 5 === 0 && position !== 0) {
                dispatch(increaseRow())
            }
        }
        if(position === 30 && wordList.includes(board5Word)){
            alert('The correct word is'  + correctWord)
        }
        
    }

    return (
        <div className='keyboard-container'>
            {rows.map((row, index) => {
                return (
                    <div className='row' key={index}>
                        {
                            index === 2 && <span className='letter-row' onClick={handleClickEnter}>Enter</span>
                        }


                        {/* row: bây giờ là 1 string => q w e r t y u i o p, không phải array nên không dùng mao đc */}
                        {/* Phương thức split của một đối tượng chuỗi được sử dụng để chia một chuỗi thành một mảng các chuỗi con và trả về mảng mới.
                         Nếu một chuỗi trống ("") được sử dụng làm dấu phân tách, thì chuỗi sẽ được phân tách giữa mỗi ký tự.  */}
                        {row.split(' ').map((character, index) => {
                            return (
                                <div className='letter-row' key={index}>
                                    <Key letter={character.toUpperCase()} />
                                    {/* add Back button  */}
                                    {character === 'm' && <span onClick={handleClickBack}>Back</span>}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Keyboard