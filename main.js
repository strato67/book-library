let myLibrary = [];

function Book(title,author,numPages,hasRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    

}

Book.prototype.read = function(){
    if(this.hasRead==false)
        this.hasRead==true;       

}

function addBook(title,author,numPages,hasRead){
    const newBook = new Book(title,author,numPages,hasRead);
    myLibrary.push(newBook);
}

addBook('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(myLibrary);