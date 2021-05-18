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
function addNewBook (){
    let btn = document.createElement("button")
    btn.innerHTML = "Add new book"
    document.body.appendChild(btn)
}
function showBooks (){
    let tableContainer = document.getElementById("tableContainer")
    let myTable = document.createElement("TABLE");
    tableContainer.appendChild(myTable)
    let header = myTable.createTHead();
    let row = header.insertRow(0);
    let title = row.insertCell(0);
    title.innerHTML = "Title"
    let author = row.insertCell()
    author.innerHTML = "Author"
    let pages = row.insertCell()
    pages.innerHTML = "Pages"
    let read = row.insertCell()
    read.innerHTML = "Read"

    let bookList = document.createElement("ul")
    let bookContainer = document.createElement("div")
    for (i=0;i < myLibrary.length; ++i){
        let row = myTable.insertRow()
        let title = row.insertCell()
        let author = row.insertCell()
        let pages = row.insertCell()
        let read = row.insertCell()
        title.innerHTML = myLibrary[i].title
        author.innerHTML = myLibrary[i].author
        pages.innerHTML = myLibrary[i].pages
        if (myLibrary[i].read) {read.innerHTML = "Yes"}
        else { read.innerHTML = "No"}

    };
    bookContainer.appendChild(bookList)
    document.body.appendChild(bookContainer)
}

addBook("Abook","aauthor",267,false);
addBook("Bbook","bauthor",264,false);
