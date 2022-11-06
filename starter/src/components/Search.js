import { useState } from "react";
import * as BooksAPI from "../BooksAPI"
import ActiveShelf from "./ActiveShelf";
const Search = ({setShowSearchpage, showSearchPage, books, switchShelf}) => {

    const [findBook, setFindBook] = useState('')
    function bookFound(e){
        searchBook(e.target.value)
        console.log(e)
    }
    async function searchBook(query){
        const response = await BooksAPI.search(query)
        if (response && !response.error){
            setFindBook(
                response.map((book)=> {
                    const searched = books.find((item)=>
                        item.id === book.id 
                    ) 
                    if(searched){
                        const what = {...book, shelf:searched.shelf}
                        return what;
                    }
                    return {...book, shelf:'none'}    
                })
            )
        }
        else{
            setFindBook([])
        }
    }

    return ( 
        <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => {setShowSearchpage(!showSearchPage)
            searchBook('')
            }}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              defaultValue={findBook}
              onChange={(event)=> bookFound(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {/* <ol className="books-grid"></ol> */}
          <ActiveShelf books={findBook} switchShelf={switchShelf}/>
        </div>
      </div>
     );
}
 
export default Search;