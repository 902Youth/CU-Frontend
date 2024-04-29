import './SearchBar.css'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"
import SearchResults from './SearchResultsList'

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const users = [
    "Ava Smith",
    "Mohamed Al-Fayed",
    "Liu Wei",
    "Carlos García",
    "Olivia Roux",
    "Sofia Ivanova",
    "John Doe",
    "Maria Fernandes",
    "Chen Yu",
    "Nadia Ali"
  ]

  const fetchData = (value) => {
    let foundResults = [];

    // * insert fetch to backend here *
  
    users.forEach(user => {
      if (user.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        foundResults.push(user);
        console.log(`User found with search term "${value}": ${user}`);
      }
    });

    setResults(foundResults);
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <>
      <div className='search-container'>
        <div className="input-wrapper">
          <MagnifyingGlass size={24} id="search-icon" />
          <input 
            placeholder="Type to search..." 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <SearchResults results={results}/>
      </div>
    </>
  )
}

export default SearchBar;