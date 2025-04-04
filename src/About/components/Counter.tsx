import React, { ReactNode } from 'react'
import CountUp from 'react-countup'

interface counterProp {
  num : number,
  type:string,
  txt:string,
  icon?: ReactNode
}
const Counter = ({num,type, txt, icon} : counterProp) => {
  return (
    <>
        <li>
          <span className='ico'>{icon} </span>
          {type === "year" &&(
              <>
                <strong>+<CountUp enableScrollSpy duration={2} end={num}/>년
                </strong>
              </>
            )}
            {type === "number" &&(
              <>
                <strong>+<CountUp enableScrollSpy duration={2} end={num}/>
                </strong>
              </>
            )}
            {type === "percent" &&(
              <>
                <strong><CountUp enableScrollSpy duration={2} end={num}/>%
                </strong>
              </>
            )}
            <span className='text'>{txt}</span>
        </li>
    </>
  )
}

export default Counter