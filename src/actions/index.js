export function selectBook(book) {
  {/* selectBook is an ActionCreator, it needs to retrun an action -
  an object with a type property.*/}
  console.log(book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

{/* An action always contains a type, and sometimes a payload. Type is always
uppercase, usually a string. Usually pull out types to a separate file.
A payload is a piece of data that describes action being undertaken. */}