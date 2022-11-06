import ActiveShelf from "./ActiveShelf";
const Shelves = ({books, switchShelf}) => {
  console.log(books)
    function parentShelf(shelf){
      const currentShelf = books.filter((book)=>book.shelf === shelf)
    return currentShelf
    }
    return ( 
        <div>
              <ActiveShelf books={parentShelf('currentlyReading')} title={'Currently Reading'} switchShelf={switchShelf}/>
              <ActiveShelf books={parentShelf('wantToRead')} title={'Want to Read'} switchShelf={switchShelf}/>
              <ActiveShelf books={parentShelf('read')} title={'Read'} switchShelf={switchShelf}/>
            </div>
     );
}
 
export default Shelves;