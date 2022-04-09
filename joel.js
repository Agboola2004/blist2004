
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const button = document.querySelector("#btn");
const bookList = document.querySelector("#book-list");



  function del(){
    titleInput.value ==="" 
     authorInput.value ===""
     isbnInput.value === ""
  }
  
button.addEventListener ("click", function () {
  if (titleInput ==="" && authorInput ==="" && isbnInput === "") {
     
  } else {
    const bookListRow = document.createElement("tr");
       
    const newTitle = document.createElement("th");
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);

    const newIsbn = document.createElement("th");
    newIsbn.innerHTML = isbnInput.value;
    bookListRow.appendChild(newIsbn);

    bookList.appendChild(bookListRow);

     
  }
});



 

































 