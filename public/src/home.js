function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//filter()
function getBooksBorrowedCount(books) {
  let currentlyOut = []
  currentlyOut.push(...books.filter(book => book.borrows[0].returned === false))
  return currentlyOut.length;
}


//helper function
function limitFive(items) {
  let limitFive = items.sort((first, second) => 
      second.count - first.count)
      limitFive.length = 5;
  return limitFive;
}

//forEach(), ternary operator
function getMostCommonGenres(books) {
  let genres = {}
  books.forEach(book => {
    if (genres.hasOwnProperty(book.genre)) {
      genres[book.genre]++
    } else {
      genres[book.genre] = 1;
    }
  })
  let array = Object.keys(genres).map(genre => {
    return {name: genre,
           count: genres[genre]}
  }).sort((countA, countB) => countA.count < countB.count ? 1 : -1)
  
 return limitFive(array);
}

//map(), sort(), ternary operator
function getMostPopularBooks(books) {
  let count = books.map(book => {
    let borrows = book.borrows;
    return {
      name: book.title,
      count: borrows.length
    }
  }).sort((countA, countB) => countA.count < countB.count ? 1 : -1)
    return limitFive(count)
  }


function getMostPopularAuthors(books, authors) {
  let result = []
  for (let author in authors) {
    const booksByAuthor = books.filter(book => {
      return book.authorId === authors[author].id
    })
    const borrowed = booksByAuthor.reduce((total, book) => {
      return total + book.borrows.length
    },0)
        const authorName = authors[author].name
    result.push({
      name: `${authorName.first} ${authorName.last}`,
      count: borrowed
    })
   }
  return result.sort((countA, countB) => countA.count < countB.count ? 1 : -1).slice(0,5)
  }



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
