import React, { useState } from 'react'

const List = (props) => {
const [active, setActive] = useState(0)

  return (
    <div className='portfolio__list'>
      {props.list.map((category,index)=>{
        return (
          <button className={`${active === index? 'active-work' : ''} portfolio__list-item text-cs`} key={index} onClick={()=>{setActive(index)
          props.filterItems(category)
          }}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default List
