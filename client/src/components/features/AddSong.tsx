import React from 'react'

function AddSong():JSX.Element {
  return (
    <div>
        <form>
            <input placeholder='name'/>
            <input placeholder='url'/>
            <button type='submit'>add</button>
        </form>
    </div>
  )
}

export default AddSong