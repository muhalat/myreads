import "./App.css";
import {useEffect, useState } from "react";
import Shelves from "./components/Shelves";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
useEffect(()=>{
  BooksAPI.getAll().then((books)=>{
    setBooks(books)
  })
  return ()=>{
    setBooks([])
  }
},[])

async function switchShelf(book, shelf){
  await BooksAPI.update(book, shelf)
   const whatever = {...book, shelf:shelf}
    setBooks((books)=>{
      const filtered = books.filter((item)=>item.id !== book.id).concat(whatever)
      return filtered
  })
  
}

  return (
    <div className="app">
      {showSearchPage ? (
        <Search showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} books={books} switchShelf={switchShelf}/>
        // <div className="search-books">
        //   <div className="search-books-bar">
        //     <a
        //       className="close-search"
        //       onClick={() => setShowSearchpage(!showSearchPage)}
        //     >
        //       Close
        //     </a>
        //     <div className="search-books-input-wrapper">
        //       <input
        //         type="text"
        //         placeholder="Search by title, author, or ISBN"
        //       />
        //     </div>
        //   </div>
        //   <div className="search-books-results">
        //     <ol className="books-grid"></ol>
        //   </div>
        // </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelves books={books} switchShelf={switchShelf}/> 
            
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
