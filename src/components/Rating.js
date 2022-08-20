import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,starClick,style,disabled}) => {

    const onspanclick=(e)=>{
       alert(e)
        starClick(e)
    }

  return (
    <>
    {[...Array(5)].map((_,i)=>
    
       
        <span className='rating' key={i} onClick={disabled?null:()=>starClick(i+1)}  style={style}>
                  {rating>=i+1?
         (<AiFillStar fontSize="15px"/>):(<AiOutlineStar fontSize="15px"/>)}
         </span>

    )
}
    </>
  )
}

export default Rating
