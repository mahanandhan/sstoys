import React from 'react'
import Navbar from './Navbar'
import ToyItems from './ToyItems'
import Searchbar from './Searchbar'

const Combination = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <ToyItems />
      </div>
    </div>
  )
}

export default Combination
