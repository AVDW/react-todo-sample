import { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

function LeftArea() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='inputContianer'>
        <Input placeholder="Task you want to do"/>
        <Button label="Add"/><Button label="reset"/>
      </div>
    </>
  )
}

export default LeftArea
