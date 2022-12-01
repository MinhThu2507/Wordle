import React from 'react'
import './heading.css'
type Props = {
    type: string,
    text: string
}

const Heading:React.FC<Props> = ({type, text}: Props) => {
  return (
    <p className={`heading-${type}`}>{text}</p>
    
  )
}

export default Heading