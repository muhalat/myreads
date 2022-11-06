import Books from "./Books";
const ActiveShelf = ({books, title, switchShelf}) => {
    return ( 
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books && books.map((current)=>(
                        <li key={current.id}>
                            <Books book={current} switchShelf={switchShelf}/>
                        </li>
                    ))}
                    </ol>
                        </div>
                    
                      </div>
     );
}
 
export default ActiveShelf;