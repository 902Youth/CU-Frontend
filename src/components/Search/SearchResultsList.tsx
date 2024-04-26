import './SearchResultsList.css'
import SearchResult from './SearchResult'

const SearchResults = ({ results }) => {
  return (
    <div className='results-list'>
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id}/>
        })
      }
    </div>
  )
}

export default SearchResults;