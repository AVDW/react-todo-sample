import { useState } from 'react';

function Button({ label = "Click Me" }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <button>{ label }</button>
    </>
  )
}

export { Button }
