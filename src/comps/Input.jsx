import { useState } from 'react';

function Input({ placeholder = "Add a todo" }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <input type='text' placeholder={ placeholder } />
    </>
  )
}

export { Input }
