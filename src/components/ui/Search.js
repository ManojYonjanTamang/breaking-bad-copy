import React, {useState} from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState('')

    const onVary = (q) => {
        setText(q)
        getQuery(q)
    }

  return (
    <section className='search'>
        <form>
            <input 
                type='text'
                className='form-control'
                placeholder='Search Characters'
                autoFocus
                value={text}
                onChange={(e) => onVary(e.target.value)} />
        </form>
    </section>
  )
}

export default Search