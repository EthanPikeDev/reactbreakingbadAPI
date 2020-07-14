import React from 'react'
import spinner from '../../img/spinner.gif'
//imported spinner gif for when the page loads and fetches the characters from the API

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner
