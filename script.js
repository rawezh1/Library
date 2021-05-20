myLibrary = [];
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
    let btnContainer = document.createElement("div")

    btn.innerHTML = "Add new book"
    btn.addEventListener("click", function(){
        let title = prompt("Enter the title of the book")
        let author = prompt("Enter the name of the author")
        let pages = prompt("Enter the number of pages")
        let read = prompt("Have you read the book? Enter true or false")
        addBook(title,author,pages,read)
        showBooks()
    })
    btnContainer.appendChild(btn)
    document.body.appendChild(btnContainer)
}
function showBooks (){
    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
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
        let deleteBook = row.insertCell()
        let changeRead = row.insertCell()
        title.innerHTML = myLibrary[i].title
        author.innerHTML = myLibrary[i].author
        pages.innerHTML = myLibrary[i].pages
        let btn = createButton(i)
        addRemoveEvent(btn)
        btn.innerHTML = "Delete"
        let readBtn = createButton(i)
        addReadEvent(readBtn)
        readBtn.innerHTML = "Read"
        changeRead.appendChild(readBtn)
        deleteBook.appendChild(btn)
        if (myLibrary[i].read) {read.innerHTML = "Yes"}
        else { read.innerHTML = "No"}

    };
    bookContainer.appendChild(bookList)
    document.body.appendChild(bookContainer)
}
function addRemoveEvent(button){
    button.addEventListener('click',function (){
        removeBook(button.id)
        showBooks()
    })

}
function removeBook(index){
      myLibrary.splice(index,1)
}
function createButton(index) {
    btn = document.createElement("button")
        btn.setAttribute("id",i)
    return btn
}
function addReadEvent(button){
    button.addEventListener('click',function (){
        changeRead(button.id)
        showBooks()
    })
}
function changeRead(index) {
    if (myLibrary[index].read) { myLibrary[index].read = false}
    else {myLibrary[index].read = true}
}
addBook("Abook","aauthor",267,false);
addBook("Bbook","bauthor",264,false);

window.onload = function() {
    
    addNewBook();
}