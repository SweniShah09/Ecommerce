import { InputBase,Box,styled } from '@mui/material'
import React from 'react'

const SearchContainer = styled(Box)`
    background: #fff;
    border-radius: 2px;
    margin-left: 10px;
    width: 60vh;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const Search = () => {
  return (
    <div>
        <SearchContainer>
            <InputSearchBase placeholder='Search for your favorite brands and more'/>
        </SearchContainer>
      
    </div>
  )
}

export default Search
