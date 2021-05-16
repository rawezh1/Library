let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
};

function showBooks (){
    let bookList = document.createElement("ul")
    let bookContainer = document.createElement("div")
    for (i=0;i < myLibrary.length; ++i){
        let showBook = document.createElement("li")
        showBook.innerHTML = myLibrary[i].title +" "+ myLibrary[i].author +" "+ myLibrary[i].pages;
        bookList.appendChild(showBook)
    };
    bookContainer.appendChild(bookList)
    document.body.appendChild(bookContainer)
}
addBook("Abook","aauthor",267,false);
addBook("Bbook","bauthor",264,false);
