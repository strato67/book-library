let myLibrary = [];

function Book(title,author,numPages,hasRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;
    
}

Book.prototype.read = function(){  
    this.hasRead = true;

}

Book.prototype.info = function(){
    return [this.title,this.author,this.numPages,this.hasRead];
}

function addBook(title,author,numPages,hasRead){
    const newBook = new Book(title,author,numPages,hasRead);
    myLibrary.push(newBook);
}

function removeBook(title){
    const index = myLibrary.findIndex(book =>book.title == title);
    myLibrary.splice(index,1);
}


function formValidator(){
    const inputs = document.querySelector('#addBookForm').getElementsByTagName("input");
    let readTemp = false;
    let pushBook = true;
    
    for(let book of myLibrary){
        if(inputs[0].value == book.info()[0] && inputs[1].value == book.info()[1]){
            pushBook = false;
            
        }

    }

    if(inputs[3].checked ==true){
        readTemp = true;
    }
    if(pushBook){
        addBook(inputs[0].value,inputs[1].value,inputs[2].value,readTemp);
        displayBooks();
    }

}

const addBookBtn = document.querySelector('#addBookBtn');
addBookBtn.addEventListener('click',()=> formValidator());

const bookGrid = document.querySelector('.cardGrid');
function displayBooks(){
    bookGrid.innerHTML = '';

    for (let book of myLibrary){

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

        const deleteButton = document.createElement('button');
        deleteButton.type = "button";
        deleteButton.className = 'btn btn-outline-danger delete';
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', () =>{
            removeBook(book.info()[0]);
            displayBooks();

        });

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
        bookBody.appendChild(deleteButton);
        bookPanel.appendChild(bookBody);
        col.appendChild(bookPanel);
        bookGrid.appendChild(col);
        
    }

}
