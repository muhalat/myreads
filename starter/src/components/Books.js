import { useState } from "react";

const Books = ({book, switchShelf}) => {
    const {title, authors, imageLinks} = book
    // console.log(book)
    const [ shelf, setShelf] = useState(book.shelf)

    function anotherShelf(e){
        setShelf(e)
        switchShelf(book,e)
    
    }
    // useEffect(()=>{
    //     switchShelf(book.shelf)
    //     book.shelf !== shelf && switchShelf(book, shelf)
    // },[book, shelf, switchShelf])
    return ( 
        <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:imageLinks ? `url(${imageLinks.thumbnail})` : ''
                                
                            }}
                          ></div>
                          <div className="book-shelf-changer">
                            <select defaultValue={shelf} onChange={(e)=> anotherShelf(e.target.value)}>
                              <option disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors}</div>
                      </div>
     );
}
 
export default Books;

                     
                              