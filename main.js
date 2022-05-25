let myLibrary = [];

function Book(title,author,numPages,hasRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    

}

Book.prototype.info = function(){
    if(this.hasRead==true){
        return `${this.title} by ${this.author}, ${this.numPages}, read`;
    }else{
        return `${this.title} by ${this.author}, ${this.numPages} pages, not read yet`;
    }

}

function addBook(title,author,numPages,hasRead){
    const newBook = new Book(title,author,numPages,hasRead);
    myLibrary.push(newBook);
}

addBook('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(myLibrary);