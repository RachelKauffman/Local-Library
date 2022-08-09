//find()
function findAuthorById(authors, id) {
  let result = authors.find((author) => {
    if (author.id === id) {
      return author;
    }
  })
  return result;
}

function findBookById(books, id) {
  let result = books.find((book) => {
    if (book.id === id) {
      return book;
    }
  })
  return result;
}

//spread operator, filter()
function partitionBooksByBorrowedStatus(books) {
  let currentlyOut = []
  let returnedBooks = []
  let newArray = []
   currentlyOut.push(books.filter(book => book.borrows[0].returned === false));
    returnedBooks.push(books.filter(book => book.borrows[0].returned === true));
    newArray = [...currentlyOut, ...returnedBooks]
  return newArray;
}


 //helper function
function limitTen(items) {
 let limitTen = items.sort((first,second) => 
      second.count - first.count)
      items.length = 10;
  return limitTen;
}

//map(), find(), utilizes helper function
function getBorrowersForBook(book, accounts) {
let result = book.borrows.map(borrow => {
  const account = accounts.find(account => account.id === borrow.id)
  account.returned = borrow.returned;
  return account;
})
  return limitTen(result);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
