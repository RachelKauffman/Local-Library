//find()
function findAccountById(accounts, id) {
  let result = accounts.find((account) => {
    if (account.id === id) {
      return account;
    }
  }
 )
  return result;
}
                
//for/in, sort(), ternary operator, arrow funtion             
function sortAccountsByLastName(accounts) {
  for (let name in accounts) {
  let result = accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1)
  }
  return accounts;
}

//reduce(), filter()
function getTotalNumberOfBorrows(account, books) { 
  let result = books.reduce((total, book) => {
  const countID = book.borrows.filter(borrow => borrow.id === account.id).length
  return total + countID}, 0)
  return result;
}


//filter(), map(), find()
function getBooksPossessedByAccount(account, books, authors) {
  let currentlyOut = books.filter(book => book.borrows[0].returned === false); //books currently checked out
  let results = currentlyOut.filter(book => book.borrows[0].id === account.id); //books currently out by account
  return results.map(book => {
    book.author = authors.find(author => author.id === book.authorId)
    return book;
  })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

