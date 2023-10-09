import React from 'react'

function AddExecutor():JSX.Element {
  return (
    <div>
          <form>
            <input placeholder='name'/>
            <input placeholder='style'/>
            <input placeholder='avatar'/>
            <button type='submit'>add</button>
        </form>
    </div>
  )
}

export default AddExecutor