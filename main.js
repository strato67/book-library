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

function formValidator(){
    const inputs = document.querySelector('#addBookForm').getElementsByTagName("input");
    let readTemp = false;

    if(inputs[3].checked ==true){
        readTemp = true;
    }
    addBook(inputs[0].value,inputs[1].value,inputs[2].value,readTemp);
    console.log(myLibrary);

}

const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click',()=> formValidator());

const bookGrid = document.querySelector('.cardGrid');

function displayBooks(){
    
}

//addBook('The Hobbit', 'J.R.R. Tolkien', 295, false);

console.log(myLibrary);