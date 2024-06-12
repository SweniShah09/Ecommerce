import { InputBase,Box,styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    border-radius: 2px;
    margin-left: 10px;
    width: 70vh;
    display: flex;
`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset%;
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding:2px;
    font-size:10px;
    display: flex;
`

const Search = () => {
  return (
    <div>
        <SearchContainer>
            <InputSearchBase placeholder='Search for your favorite brands and more'/>

            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
        </SearchContainer>
      
    </div>
  )
}

export default Search
