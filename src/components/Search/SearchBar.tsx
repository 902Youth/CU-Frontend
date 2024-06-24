import "./SearchBar.css";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import SearchResults from "./SearchResultsList";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);
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
    "Nadia Ali",
  ];

  const fetchData = (value: string) => {
    if (value.trim() !== "") {
      // // * insert fetch to backend here *

      const foundResults = users.filter((user) => {
        return user.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      });

      if (foundResults.length > 0) {
        setResults(foundResults);
      }
    } else {
      setResults([])
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  console.log(results);

  return (
    <>
      <div className="search-container">
        <div className="input-wrapper">
          <MagnifyingGlass size={24} id="search-icon" />
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        {results.length > 0 && <SearchResults results={results} />}
      </div>
    </>
  );
};

export default SearchBar;
