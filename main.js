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

Book.prototype.info = function(){
    return [this.title,this.author,this.numPages,this.hasRead];
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
    
    displayBooks()

}


const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click',()=> formValidator());

const bookGrid = document.querySelector('.cardGrid');
function displayBooks(){
    bookGrid.innerHTML = '';

    for (let book of myLibrary){
        console.log(book.info());

        const col = document.createElement('div');
        col.className = 'col-sm';        

        const bookPanel = document.createElement('div');
        bookPanel.className = 'card';
        bookPanel.style.width = '18rem';

        const bookBody = document.createElement('div');
        bookBody.className = 'card-body';

        const bookCardTitle = document.createElement('h5');
        bookCardTitle.className = 'card-title';
        bookCardTitle.innerText = book.info()[0];

        const bookCardAuthor = document.createElement('h6');
        bookCardAuthor.className = 'card-subtitle mb-2 text-muted';
        bookCardAuthor.innerText = `Author: ${book.info()[1]}`;

        const bookCardpgCount = document.createElement('p');
        bookCardpgCount.className = 'card-text';
        bookCardpgCount.innerText = `${book.info()[2]} pages`;

        const markReadButton = document.createElement('button');
        markReadButton.type = "button";

        const btnChange = ()=>{
            markReadButton.innerText = "Read";
            markReadButton.className = "btn btn-success Read";
            markReadButton.disabled = true;

        }


        if(book.info()[3] == false){
            markReadButton.innerText = "Mark as read";
            markReadButton.className = "btn btn-outline-success markRead";
            markReadButton.addEventListener('click', ()=>{
                book.read();
                btnChange();

            });
        }else btnChange();
        
        bookBody.appendChild(bookCardTitle);
        bookBody.appendChild(bookCardAuthor);
        bookBody.appendChild(bookCardpgCount);
        bookBody.appendChild(markReadButton);
        bookPanel.appendChild(bookBody);
        col.appendChild(bookPanel);
        bookGrid.appendChild(col);
        
    }



}

