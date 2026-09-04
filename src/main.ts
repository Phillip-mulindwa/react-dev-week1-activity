class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list") as HTMLElement;
  const bookDiv = document.createElement("div");
  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
  bookList.appendChild(bookDiv);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

displayBook(book1);
displayBook(book2);

const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
  const review: Review = { bookId, rating, comment };
  reviews.push(review);
}

addReview(1, 5, "A fantastic read!");
addReview(2, 4, "Long but rewarding.");