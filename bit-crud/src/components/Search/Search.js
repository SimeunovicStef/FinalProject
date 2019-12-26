import React from 'react'

const Search = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(e.target.value.toLowerCase())
  }
  return (
    <input type='text' placeholder='Serach' className='searchinput' onChange={onChangeHandler} ></input>
  )
}

export default Search